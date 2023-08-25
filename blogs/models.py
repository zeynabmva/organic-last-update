from django.db import models

# Create your models here.

class Blogs(models.Model):
    blog_name=models.CharField(max_length=350)
    writer=models.CharField(max_length=350)
    
    image=models.ImageField(blank=True,null=True)
    addition_image=models.ImageField(blank=True,null=True)
    
    abstract=models.TextField(blank=True,null=True)
    summary=models.TextField(blank=True,null=True)
    
    titlefirst=models.CharField(max_length=350,blank=True,null=True)
    contextfirst=models.TextField(blank=True,null=True)
    
    titlesecond=models.CharField(max_length=350,blank=True,null=True)
    contextsecond=models.TextField(blank=True,null=True)
 
    titlethird=models.CharField(max_length=350,blank=True,null=True)
    contextthird=models.TextField(blank=True,null=True)
    
    titlefourth=models.CharField(max_length=350,blank=True,null=True)
    contextfourth=models.TextField(blank=True,null=True)
 
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.blog_name