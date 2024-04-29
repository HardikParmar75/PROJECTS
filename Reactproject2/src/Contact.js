import React from 'react'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <p className='py-5 text-center display-3 fw-bold bg-light'>Get In Touch</p>
      <div className='w2 m-auto row shadow  px-3 py-5 text-center fs-5'>
        <div className='col-4 border'>
          <p><i className='fa-solid fa-phone text-success'></i></p>
          <p>+123 456 7890</p>
          <p>+123 456 7890</p>
        </div>
        <div className='col-4 border'>
          <p><i className='fa-solid fa-envelope text-success'></i></p>
          <p>info@example.com</p>
          <p>support@example.com</p>
        </div>
        <div className='col-4 border'>
          <p><i className='fa-solid fa-location-dot text-success'></i></p>
          <p>1569 Ave, New York,</p>
          <p>NY 10028, USA</p>
        </div>
      </div>
      <p className='bg-light fs-2 fw-bold text-center p-5'>Frequently Asked Question!</p>
      <div className='row w2 m-auto p-5'>
        <div className='col-md-6'>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item border-0 border-bottom">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Pulvinar nostrud class cum facilis?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                </div>
              </div>
            </div>
            <div class="accordion-item border-0 border-bottom">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Pon excepturi numquam, facilis?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                </div>
              </div>
            </div>
            <div class="accordion-item border-0 border-bottom">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Pon excepturi numquam, facilis?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item border-0 border-bottom">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Pulvinar nostrud class cum facilis?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                </div>
              </div>
            </div>
            <div class="accordion-item border-0 border-bottom">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Pon excepturi numquam, facilis?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                </div>
              </div>
            </div>
            <div class="accordion-item border-0 border-bottom">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Pon excepturi numquam, facilis?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
