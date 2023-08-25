import React from 'react'
import "../Modal.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux"

function SuccessModal({
    successModalShown,
  setSuccessModalShown,
}) {
  return (
    <>
{/* <!-- Modal HTML --> */}
<div id="myModal" class="modal fade">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header justify-content-center">
				<div class="icon-box">
                <i class="fa-solid fa-check"></i>
				</div>
				<span onClick={() => setSuccessModalShown(!successModalShown)} className="close">
            &times;
          </span>
			</div>
			<div class="modal-body text-center">
				<h4>Great!</h4>	
				<p>The payment transaction was successfully completed</p>
				<Link to="/">
            <button
              onClick={() => setSuccessModalShown (!successModalShown)}
              className="modal_blue_btn"
            >
              <p>GO TO HOME</p>
              <i className="fa-solid fa-circle-arrow-right"></i>
            </button>
          </Link>
			</div>
		</div>
	</div>
</div>     

    </>
  )
}

const t = (a) => a;
export default (SuccessModal);