<!-- eslint-disable vue/valid-v-else -->
<template>
  <!-- Contact form -->
  <section class="position-relative py-5">
    <b-container class="position-relative zindex-5 py-2 py-md-4 py-lg-5">
      <b-row class="justify-content-center text-center pt-xl-2 pb-4 mb-1 mb-lg-3">
        <b-col xl="6" lg="7" md="8" sm="11">
          <h2 class="mb-4">Experience Hassle-Free Notary Services Tailored for You</h2>
          <p class="text-muted mb-0">
            Bilingual notary services in English and Spanish to meet your document authentication
            needs. Mobile and local services available. Contact us for seamless notarization.
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col lg="8" md="10">
          <b-form ref="form" @submit.prevent="handleSubmit" class="row">
            <b-col sm="6" class="mb-4">
              <b-form-group label="First name" label-for="fn">
                <b-form-input v-model="form.fName" type="text" id="fn"></b-form-input>
                <b-form-invalid-feedback>Please, enter your first name!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Last name" label-for="ln">
                <b-form-input v-model="form.lName" type="text" id="ln" required> </b-form-input>
                <b-form-invalid-feedback>Please, enter your last name!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>
            <b-col sm="6" class="mb-4">
              <b-form-group label="Email address" label-for="email">
                <b-form-input v-model="form.email" type="email" id="email" required> </b-form-input>
                <b-form-invalid-feedback
                  >Please, provide a valid email address!</b-form-invalid-feedback
                >
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Phone" label-for="phone">
                <b-form-input
                  v-model="form.phone"
                  type="text"
                  id="phone"
                  v-mask="'(###) ###-####'"
                  placeholder="( ___ ) ___-____"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" class="mb-4">
              <b-form-group label="Message" label-for="message">
                <b-form-textarea v-model="form.message" id="message" rows="4" required>
                </b-form-textarea>
                <b-form-invalid-feedback>Please, enter your message!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" class="text-center pt-2 pt-md-3 pt-lg-4">
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
            </b-col>
          </b-form>
        </b-col>
      </b-row>
    </b-container>

    <!-- BG shape -->
    <div class="position-absolute end-0 bottom-0 text-primary">
      <svg
        width="469"
        height="343"
        viewBox="0 0 469 343"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.08"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M273.631 680.872C442.436 768.853 639.315 708.216 717.593 558.212C795.871 408.208 732.941 212.157 564.137 124.176C395.333 36.195 198.453 96.8326 120.175 246.836C41.8972 396.84 104.827 592.891 273.631 680.872ZM236.335 752.344C440.804 858.914 688.289 788.686 789.109 595.486C889.928 402.286 805.903 159.274 601.433 52.7043C396.964 -53.8654 149.479 16.3623 48.6595 209.562C-52.1598 402.762 31.8652 645.774 236.335 752.344Z"
          fill="#6366f1"
        />
        <path
          opacity="0.08"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M298.401 633.404C434.98 704.59 598.31 656.971 664.332 530.451C730.355 403.932 675.946 242.827 539.367 171.642C402.787 100.457 239.458 148.076 173.435 274.595C107.413 401.114 161.822 562.219 298.401 633.404ZM288.455 652.464C434.545 728.606 611.369 678.429 683.403 540.391C755.437 402.353 695.402 228.725 549.312 152.583C403.222 76.4404 226.398 126.617 154.365 264.655C82.331 402.693 142.365 576.321 288.455 652.464Z"
          fill="#6366f1"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useToast } from 'vue-toastification'

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailjsKey = import.meta.env.VITE_EMAILJS_ACCESS_KEY

let form = ref({
  fName: '',
  lName: '',
  email: '',
  phone: '',
  message: '',
  service: ''
})

const isLoading = ref(false)
let isSubmitted = ref(false)
let options = {};

function toastOptions() {    
    const screenWidth = window.innerWidth;
    if (screenWidth >= 576) { // Large screens (lg breakpoint in Bootstrap)
        options = {
            position: "bottom-center",
            timeout: 7500,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            showCloseButtonOnHover: true,
            closeButton: 'button'
        };
    } else { // Small screens (sm and xs breakpoints)
        options = {
            position: "top-center",
            timeout: 7500,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            showCloseButtonOnHover: true,
            closeButton: 'button'
        };
    }

};


toastOptions();
const toast = useToast(options)

const sendEmail = async () => {
  isLoading.value = true
  try {
    form.value.service= 'Notary Service'
    await emailjs.send(serviceID, templateID, form.value, emailjsKey)
    toast.success('Form submitted successfully!')
    isSubmitted.value = true
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
  if (isSubmitted.value) {
    handleClick()
  }
  return { handleSubmit }
}

function handleClick() {  
    form.value = { fName: ' ', lName: ' ', email: ' ', phone: ' ', message: ' ' }
    isSubmitted.value = false;  
  
   return { handleClick, form }
}
</script>
