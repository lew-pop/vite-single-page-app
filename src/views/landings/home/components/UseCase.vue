<template>
  <section class="position-relative overflow-hidden py-5">
    <span
      class="position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none"
      style="background: linear-gradient(141deg, rgba(255, 255, 255, 0.01) 17.3%, #f3f6ff 78.21%)"
    ></span>
    <div
      class="position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block"
      style="
        background: linear-gradient(
          141deg,
          rgba(11, 15, 25, 0.01) 17.3%,
          rgba(255, 255, 255, 0.04) 78.21%
        );
      "
    ></div>

    <b-container class="position-relative zindex-2 pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-3">
      <h2 class="h1 text-center pb-1 mb-2">Expert Notary Services: Secure, Reliable, and Convenient</h2>
      <p class="fs-lg text-center pb-lg-2">Full Range of Notary Services for Legal, Real Estate, and Financial Documents</p>

      <!-- Use case -->
      <b-row
        class="align-items-center justify-content-center py-4 py-md-5 my-1 my-sm-3 my-md-0 my-xl-3"
      >
        <b-col
          cols="11"
          sm="9"
          md="7"
          lg="6"
          class="offset-lg-1 order-md-2 pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0"
        >
          <Parallax custom-class="parallax" :custom-style="{ maxWidth: '636px' }">
            <div class="parallax-layer" data-depth="0">
              <div class="ratio" style="--si-aspect-ratio: 89.6%"></div>
            </div>
            <div class="parallax-layer" style="padding-right: 24.2%" data-depth="0.1">
              <img
                src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/middle.png"
                class="d-dark-mode-none position-relative rounded-3"
                style="
                  top: 27.5%;
                  max-width: 482px;
                  box-shadow: 0 12px 48px -8px rgba(189, 196, 221, 0.35);
                "
                alt="Certified Notary Public"
              />
              <img
                src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/middle.png"
                class="d-none d-dark-mode-block position-relative rounded-3"
                style="
                  top: 27.5%;
                  max-width: 482px;
                  box-shadow: 0px 12px 48px -8px rgba(8, 11, 18, 0.4);
                "
                alt="Certified Notary"
              />
            </div>
            <div class="parallax-layer" style="padding-left: 45.75%" data-depth="-0.12">
              <img
                src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/top.png"
                class="d-dark-mode-none position-relative rounded-3"
                style="
                  max-width: 345px;
                  box-shadow: 0 10.8px 43.2px -7.2px rgba(189, 196, 221, 0.35);
                "
                alt="Notary Public"
              />
              <img
                src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/top.png"
                class="d-none d-dark-mode-block position-relative rounded-3"
                style="max-width: 345px; box-shadow: 0px 12px 48px -8px rgba(8, 11, 18, 0.4)"
                alt="Public Notary"
              />
            </div>
            <div
              class="parallax-layer"
              style="padding-right: 7.547%; padding-left: 44.97%"
              data-depth="0.3"
            >
              <img
                src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/ccnotary.png"
                class="d-dark-mode-none position-relative rounded-3"
                style="
                  top: 60.75%;
                  max-width: 302px;
                  box-shadow: 0px 0px 48px -4px rgba(189, 196, 221, 0.35);
                "
                alt="Best Notary Public"
              />
              <img
                src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/ccnotary.png"
                class="d-none d-dark-mode-block position-relative rounded-3"
                style="
                  top: 60.75%;
                  max-width: 302px;
                  box-shadow: 0px -15px 48px -8px rgba(8, 11, 18, 0.4);
                "
                alt="Best notary near me"
              />
            </div>
          </Parallax>
        </b-col>
        <b-col md="5" xl="4" class="offset-xl-1 order-md-1 text-center text-md-start">
          <h2 class="h2 mb-lg-4">Comprehensive Legal Document Notarization Services</h2>
          <p class="fs-lg pb-lg-2 mb-4">
            Ensure your legal documents are notarized with precision and integrity. Our notarization services cover a wide range 
            of documents, including wills, trusts, and power of attorney forms, providing you with the legal assurance you need. 
            With a focus on accuracy and confidentiality, we are the trusted choice for all your legal notarization needs.
          </p>
          <router-link :to="{ name: 'pages.services' }"> 
          <a href="#" class="btn btn-outline-primary rounded-pill">
            Learn more
            <Icon :icon="RightArrowAltIcon" class="bx fs-lg ms-2 me-n1"></Icon>
          </a>
          </router-link>
        </b-col>
      </b-row>

      <!-- Use case -->
      <b-row
        class="align-items-center justify-content-center justify-content-md-start py-4 py-md-5 my-2 my-sm-3 my-md-0 my-xl-3"
      >
        <b-col cols="11" sm="9" md="7" lg="6" class="pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
          <Parallax custom-class="parallax" :custom-style="{ maxWidth: '636px' }">
            <div class="parallax-layer" data-depth="0.05">
              <img src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/kolol.png" alt="secure notary" />
            </div>
            
          </Parallax>
        </b-col>
        <b-col md="5" xl="4" class="offset-lg-1 text-center text-md-start">
          <h2 class="h2 mb-lg-4">Expert Notarization for Real Estate Transactions</h2>
          <p class="fs-lg pb-lg-2 mb-4">
            Streamline your real estate transactions with our expert notarization services. From mortgage documents to property deeds, 
            our certified notaries ensure a smooth, legally compliant process for buyers, sellers, and real estate professionals alike. 
            Experience hassle-free closings with our reliable real estate document notarization.
          </p>
          <router-link :to="{ name: 'pages.services' }"> 
             <a href="#" class="btn btn-outline-primary rounded-pill">
            Learn more
            <Icon :icon="RightArrowAltIcon" class="bx fs-lg ms-2 me-n1"></Icon>
          </a>
          </router-link>
        </b-col>
      </b-row>

      <!-- Use case -->
      <b-row
        class="align-items-center justify-content-center py-4 py-md-5 my-2 my-sm-3 my-md-0 my-xl-3"
      >
        <b-col
          cols="11"
          sm="9"
          md="7"
          lg="6"
          class="offset-lg-1 order-md-2 pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0"
        >
          <Parallax custom-class="parallax" :custom-style="{ maxWidth: '636px' }">
            <div class="parallax-layer" data-depth="0.1">
              <img
                src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/loan-signing.png"
                class="d-dark-mode-none rounded-3"
                style="box-shadow: 0 10.2px 41px -6.8px rgba(189, 196, 221, 0.3)"
                alt="Chat bot UI window"
              />
            </div>
           
          </Parallax>
        </b-col>
        <b-col md="5" xl="4" class="offset-xl-1 order-md-1 text-center text-md-start">
          <h2 class="h2 mb-lg-4">Professional Loan Document Signing and Notarization</h2>
          <p class="fs-lg pb-lg-2 mb-4">
            Navigate the complexities of loan documentation with our professional signing services. Specializing in mortgage, refinance, 
            and equity loans, our notaries provide meticulous review and execution of loan documents, ensuring clarity and compliance every 
            step of the way. Trust us to facilitate your loan signings with expertise.
          </p>
          <router-link :to="{ name: 'pages.services' }"> 
          <a href="#" class="btn btn-outline-primary rounded-pill">
            Learn more
            <Icon :icon="RightArrowAltIcon" class="bx fs-lg ms-2 me-n1"></Icon>
          </a>
          </router-link>
        </b-col>
      </b-row>

      <!-- More button -->
      <div
        class="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 gap-sm-4 pt-4 pb-3 py-md-5 my-1 my-sm-3 my-md-0 my-xl-3"
      >
        <div class="fs-xl">And many more...</div>
        <router-link :to="{ name: 'pages.services' }"> <a href="#" class="btn btn-lg btn-outline-primary rounded-pill">Explore all notary services</a></router-link>
       
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>



import { Icon } from '@iconify/vue'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'
import Parallax from '@/components/Parallax.vue'
</script>
