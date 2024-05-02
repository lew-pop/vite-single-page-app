<template>
  <section class="position-relative bg-secondary pt-5">
    <b-container class="position-relative zindex-2 pt-5">
      <!-- Breadcrumb -->
      <b-nav class="pt-lg-4 pb-3 mb-2 mb-sm-3" aria-label="breadcrumb">
        <b-breadcrumb class="mb-0">
          <b-breadcrumb-item href="/">
            <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
            Home
          </b-breadcrumb-item>
          <b-breadcrumb-item active>Contact Form</b-breadcrumb-item>
        </b-breadcrumb>
      </b-nav>

      <b-row alignContent="end">
        <!-- Contact links -->
        <b-col xl="4" lg="5" class="pb-4 pb-sm-5 mb-2 mb-sm-0">
          <div class="pe-lg-4 pe-xl-0">
            <h1 class="pb-3 pb-md-4 mb-lg-5">Contact Us</h1>
            <div class="d-flex align-items-start pb-3 mb-sm-1 mb-md-3">
              <div class="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                <Icon :icon="EnvelopeIcon" />
              </div>
              <div class="ps-3 ps-sm-4">
                <h2 class="h4 pb-1 mb-2">Email us</h2>
                <p class="mb-2">
                  Please feel free to drop us a line. We will respond as soon as possible.
                </p>
                <div class="btn btn-link btn-lg px-0">
                  Leave a message
                  <Icon :icon="RightArrowAltIcon" class="lead ms-2" />
                </div>
              </div>
            </div>
          </div>
        </b-col>

        <!-- Contact form -->
        <b-col xl="6" lg="7" class="offset-xl-2">
          <div class="card border-light shadow-lg py-3 p-sm-4 p-md-5">
            <div
              class="bg-dark position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block"
            ></div>
            <div class="card-body position-relative zindex-2">
              <h2 class="card-title pb-3 mb-4">Schedule an Appointment</h2>
              <b-form ref="form" @submit.prevent="handleSubmit" class="row g-4">
                <b-col cols="12">
                  <b-form-group label="Full name" label-for="fn" label-class="fs-base">
                    <b-form-input
                      v-model="form.name"
                      id="fn"
                      type="text"
                      class="form-control-lg"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback>Please enter your full name!</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>

                <b-col cols="12">
                  <b-form-group label="Email address" label-for="email" label-class="fs-base">
                    <b-form-input
                      v-model="form.email"
                      id="email"
                      type="email"
                      class="form-control-lg"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback
                      >Please provide a valid email address!</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>

                <b-col cols="12">
                  <b-form-group label="Service" label-for="service" label-class="fs-base">
                    <b-form-select
                      id="service"
                      v-model="form.service"
                      :options="options"
                      class="form-select-lg"
                    >
                    </b-form-select>
                    <b-form-invalid-feedback>Choose a service!</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="pb-2">
                  <b-form-group label="Message" label-for="message" label-class="fs-base">
                    <b-form-textarea
                      v-model="form.message"
                      id="message"
                      rows="3"
                      class="form-control-lg"
                      required
                    ></b-form-textarea>
                    <b-form-invalid-feedback
                      >Please provide a valid message!</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  <b-form-group label="Date" label-for="date" label-class="fs-base">
                    <b-form-input
                      v-model="form.date"
                      id="date"
                      type="text"
                      v-mask="'##-##'"
                      placeholder="mm/dd"
                      class="form-control-lg"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback>Enter a date!</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>

                <b-col sm="6">
                  <b-form-group label="Time" label-for="time" label-class="fs-base">
                    <b-form-input
                      v-model="form.time"
                      id="time"
                      type="text"
                      v-mask="'##:##'"
                      placeholder="hh:mm"
                      class="form-control-lg"
                     
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback>Enter a time!</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>

                <b-col cols="12" class="pt-2 pt-sm-3">
                  <b-button
                    :disabled="isLoading"
                    class="w-100 w-sm-auto shadow-primary"
                    variant="primary"
                    size="lg"
                    type="submit"
                  >
                    <b-spinner small v-if="isLoading" />
                    {{ isLoading ? 'Loading...' : 'Make an appointment' }}
                  </b-button>
                </b-col>
              </b-form>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="position-absolute bottom-0 start-0 w-100 bg-light" style="height: 8rem"></div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import EnvelopeIcon from '@iconify/icons-bx/envelope'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
import { useToast } from 'vue-toastification'



const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateID = import.meta.env.VITE_EMAILJS_CONTACT_ID
const emailjsKey = import.meta.env.VITE_EMAILJS_ACCESS_KEY


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
  name: '',
  email: '',
  service: '',
  message: '',
  date: '',
  time: ''
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
    await emailjs.send(serviceID, templateID, form.value, emailjsKey)   
    toast.success('Form submitted successfully!')
    form.value= clearForm()
    
  } catch (error) {
    toast.error('Failed to send form. Please try again.')
  } finally {
    isLoading.value = false
  }
  
}
function handleSubmit() {
  if (!isLoading.value) {
    sendEmail()
    
  } 
}
function clearForm() {
  form.value = { name: ' ', email: ' ', service: ' ', message: ' ', date: ' ', time: ' ' }
   return { form }
}
</script>
