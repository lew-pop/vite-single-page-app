<template>
  <b-container>
    <div class="primary-bg-subtle rounded-3 py-3 px-3 px-sm-4 px-lg-0">
      <b-row class="align-items-center pt-1 pb-2 py-lg-4">
        <b-col xl="4" lg="5" md="6" class="offset-lg-1 mb-4 pb-3 mb-md-0 pb-md-0">
          <h2 class="h1 mb-lg-4">Get in Touch</h2>
          <p class="pb-2 pb-md-4 pb-lg-5">
            Need a certified notary? Our local notary services ensure your documents are legally
            authenticated with ease and precision. Quick, reliable service guaranteed.
          </p>
          <h3 class="mb-lg-4">Contact Info</h3>
          <ul class="list-unstyled pb-3 pb-md-4 pb-lg-5 mb-2">
            <li class="mb-2">
              <a href="tel:6195923797" class="nav-link d-flex align-items-center p-0">
                <Icon :icon="PhoneCallIcon" class="fs-xl text-primary me-2" />
                (619)&nbsp;592&#8209;3797
              </a>
            </li>
            <li class="mb-2">
              <a href="mailto:caligirlnotary4u@gmail.com" class="nav-link d-flex align-items-center p-0">
                <Icon :icon="EnvelopeIcon" class="fs-xl text-primary me-2" />
                caligirlnotary4u@gmail.com
              </a>
            </li>
           
          </ul>
          <div class="d-flex">
            <a
            href="https://www.instagram.com/caligirlnotary?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-icon btn-outline-secondary btn-instagram rounded-circle me-3"
            aria-label="Instagram"
          >
            <Icon :icon="InstagramIcon" class="bx"></Icon>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61550899560335&mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-icon btn-outline-secondary btn-facebook rounded-circle me-3"
            aria-label="Facebook"
          >
            <Icon :icon="FacebookIcon" class="bx"></Icon>
          </a>
          <a
            href="http://linkedin.com/in/miryam-scott-52aa68177"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-icon btn-outline-secondary btn-linkedin rounded-circle me-3"
            aria-label="LinkedIn"
          >
            <Icon :icon="LinkedinIcon" class="bx"></Icon>
          </a>
           
          </div>
        </b-col>
        <b-col lg="5" md="6" class="offset-xl-1">
          <div class="card border-0 shadow-sm p-sm-2">
            <b-form ref="form" @submit.prevent="handleSubmit" class="card-body">
              <div class="mb-4">
                <b-form-group label="Service" label-for="service" label-class="fs-base">
                  <b-form-select
                    v-model="form.service"
                    :options="options"
                    id="service"
                    class="form-select-lg"
                    required
                  ></b-form-select>
                  <b-form-invalid-feedback>Please choose the service!</b-form-invalid-feedback>
                </b-form-group>
              </div>
              <div class="mb-4">
                <b-form-group label="Full name" label-for="name" label-class="fs-base">
                  <b-form-input 
                  v-model="form.fName"
                  type="text" 
                  id="name" 
                  class="form-control-lg" 
                  required />
                  <b-form-invalid-feedback>Please enter your name!</b-form-invalid-feedback>
                </b-form-group>
              </div>
              <div class="mb-4">
                <b-form-group label="Email address" label-for="email" label-class="fs-base">
                  <b-form-input
                  v-model="form.email"
                  type="email" 
                  id="email" 
                  class="form-control-lg" 
                  required />
                  <b-form-invalid-feedback
                    >Please provide a valid email address!</b-form-invalid-feedback
                  >
                </b-form-group>
              </div>
              <div class="mb-4 pb-2">
                <b-form-group label="Message" label-for="message" label-class="fs-base">
                  <b-form-textarea
                  v-model="form.message"
                    id="message"
                    class="form-control-lg"
                    rows="3"
                    placeholder="Tell us about your project"
                    required
                  ></b-form-textarea>
                  <b-form-invalid-feedback>Please enter you message!</b-form-invalid-feedback>
                </b-form-group>
              </div>
              <b-button
                    :disabled="isLoading"
                    class="shadow-primary"
                    variant="primary"
                    size="lg"
                    type="submit"
                  >
                    <b-spinner small v-if="isLoading" />
                    {{ isLoading ? 'Loading...' : 'Send Request' }}
                  </b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import EnvelopeIcon from '@iconify/icons-bx/envelope'
import PhoneCallIcon from '@iconify/icons-bx/phone-call'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import {  ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useToast } from 'vue-toastification'


const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailjsKey = import.meta.env.VITE_EMAILJS_ACCESS_KEY;

const options = [
  { text: 'Choose a service', value: null },
  { text: 'General Notarizations', value: 'Notary' },
  { text: 'Power of Attorney', value: 'POA' },
  { text: 'Loan Signing (LSS Certified)', value: 'Loan' },
  { text: 'Buyer Signing', value: 'Buyer' },
  { text: 'HELOC Signing', value: 'HELOC' },
  { text: 'Reverse Mortgage Signing', value: 'Re-mortgage' },
  { text: 'Loan Modification Signing', value: 'Loan-mod' },
  { text: 'Apostle Agent', value: 'Apostle' },
  { text: 'Wedding Officiant and Minister', value: 'Wedding' },
  { text: 'Other', value: 'Other' }
]

const form = ref({
  fName: '',
  email: '',
  service: '',
  message: '',
  phone: ''
})
const isLoading = ref(false)
let toastOptions = {};

function updateToastOptions() {    
    const screenWidth = window.innerWidth;
    if (screenWidth >= 576) { // Large screens (lg breakpoint in Bootstrap)
      toastOptions = {
            position: "bottom-center",
            timeout: 7500,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            showCloseButtonOnHover: true,
            closeButton: 'button'
        };
    } else { // Small screens (sm and xs breakpoints)
      toastOptions = {
            position: "top-center",
            timeout: 7500,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            showCloseButtonOnHover: true,
            closeButton: 'button'
        };
    }

};


updateToastOptions();
const toast = useToast(toastOptions)

const sendEmail = async () => {
  isLoading.value = true
  try {
    form.value.phone= '867-5309 (This is just a placeholder :D ...)'
    await emailjs.send(serviceID, templateID, form.value, emailjsKey)    
    toast.success('Form submitted successfully!')
    form.value= clearForm()
    
  } catch (error) {
    toast.error('Failed to send form. Please try again.')
  } finally {
    isLoading.value = false
  }
  return { form }
}
function handleSubmit() {
  if (!isLoading.value) {
    sendEmail()
    
  }
  return { handleSubmit }
}
function clearForm() {
  form.value = { fName: ' ', email: ' ', service: ' ', message: ' ' }
   return { form }
}
</script>
