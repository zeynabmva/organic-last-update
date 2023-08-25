from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate, login
from django.core.mail import send_mail
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, smart_bytes
from django.utils.http import urlsafe_base64_encode
from django.conf import settings
 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
  


User = get_user_model()

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'surname', 'image'] 

class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ("email", "password",'name','surname')
        extra_kwargs = {
            "password": {
                "write_only": True
            }
        }

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        if email and password:
            user = authenticate(request=self.context.get('request'), email=email, password=password)
            login(self.context.get('request'),user)
            if user is None:
                raise serializers.ValidationError({"error": "Invalid credentials"})

            if not user.is_active:
                raise serializers.ValidationError({"error": "User is not active"})

            attrs['user'] = user
        else:
            raise serializers.ValidationError({"error": "Both email and password are required"})

        return attrs


class RegisterSerializer(serializers.ModelSerializer):
    passwordConfirm = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ("email", "password", "passwordConfirm")
        extra_kwargs = {
            "password": {
                "write_only": True
            },
            "passwordConfirm": {
                "write_only": True
            },
        }

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")
        passwordConfirm = attrs.get("passwordConfirm")

        user = authenticate(email=email, password=password)

        if user:
            raise serializers.ValidationError({"error": "This user already exists"})

        if password != passwordConfirm:
            raise serializers.ValidationError({"error": "The passwords should match each other"})

        return super().validate(attrs)


    def create(self, validated_data):
        validated_data.pop("passwordConfirm")
        print(validated_data)
        user = User.objects.create_user(
            **validated_data, is_active=False
        )

        # send mail
        token = PasswordResetTokenGenerator().make_token(user)
        uuid64 = urlsafe_base64_encode(smart_bytes(user.id))
        link = f"http://localhost:8000/api/accounts/activation/{uuid64}/{token}/"
        send_mail(
            "Activation email",  # --> subject
            f"Please click the link below\n{link}",  # --> message,
            settings.EMAIL_HOST_USER,
            [user.email],
            fail_silently=False
        )
        return user
    
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email','name','surname','image']