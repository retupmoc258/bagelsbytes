<template>
  <navbar :navLight="'nav-light'" :logoLightBackground=false />

  <section class="bg-half-170 bg-primary-subtle d-table w-100" :style="{ 'background-image': 'url(' + (headerImage) + ')' }">
    <div class="bg-overlay"></div>
    <div class="container">
      <div class="row mt-5 justify-content-center">
        <div class="col-12">
          <div class="heading-title text-center">
            <h2 class="text-white title title-dark mb-3">Our Services</h2>
            <p class="para-desc mx-auto text-white-50">Comprehensive software development and IT solutions tailored to your needs.</p>
            <div class="mt-4 pt-2">
              <a href="#services-detail" class="btn btn-light">Explore Services</a>
            </div>
          </div>
        </div><!--end col-->
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <shape />

  <section class="section" id="services-detail">
    <!-- Services Overview -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <div class="section-title mb-4 pb-2">
            <h4 class="title mb-4">What We Offer</h4>
            <p class="text-muted para-desc mx-auto mb-0">
              From concept to deployment, we provide end-to-end software solutions that drive results.
            </p>
          </div>
        </div>
      </div>

      <!-- Detailed Service Cards -->
      <div class="row mt-5">
        <!-- Web Development -->
        <div class="col-lg-6 col-12 mt-4 pt-2">
          <div class="card border-0 shadow rounded overflow-hidden">
            <div class="row g-0 align-items-center">
              <div class="col-md-4 bg-primary">
                <div class="p-4 text-center">
                  <i class="uil uil-browser text-white display-4"></i>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Web Development</h5>
                  <p class="text-muted mb-3">Modern, responsive web applications built with the latest technologies including Vue.js, React, and Node.js.</p>
                  <ul class="list-unstyled text-muted">
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>Responsive Design</li>
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>Modern Frameworks</li>
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>Fast Performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Apps -->
        <div class="col-lg-6 col-12 mt-4 pt-2">
          <div class="card border-0 shadow rounded overflow-hidden">
            <div class="row g-0 align-items-center">
              <div class="col-md-4 bg-primary">
                <div class="p-4 text-center">
                  <i class="uil uil-mobile-android text-white display-4"></i>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Mobile Applications</h5>
                  <p class="text-muted mb-3">Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.</p>
                  <ul class="list-unstyled text-muted">
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>iOS & Android</li>
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>Cross-Platform</li>
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>User-Centric Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cloud Solutions -->
        <div class="col-lg-6 col-12 mt-4 pt-2">
          <div class="card border-0 shadow rounded overflow-hidden">
            <div class="row g-0 align-items-center">
              <div class="col-md-4 bg-primary">
                <div class="p-4 text-center">
                  <i class="uil uil-cloud-computing text-white display-4"></i>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Cloud Solutions</h5>
                  <p class="text-muted mb-3">Scalable cloud infrastructure and deployment solutions using AWS, Azure, and modern DevOps practices.</p>
                  <ul class="list-unstyled text-muted">
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>AWS & Azure</li>
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>DevOps Integration</li>
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>Scalable Architecture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- API Development -->
        <div class="col-lg-6 col-12 mt-4 pt-2">
          <div class="card border-0 shadow rounded overflow-hidden">
            <div class="row g-0 align-items-center">
              <div class="col-md-4 bg-primary">
                <div class="p-4 text-center">
                  <i class="uil uil-database text-white display-4"></i>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">API Development</h5>
                  <p class="text-muted mb-3">Robust RESTful and GraphQL APIs designed for performance, security, and scalability.</p>
                  <ul class="list-unstyled text-muted">
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>RESTful & GraphQL</li>
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>Secure & Reliable</li>
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>Well-Documented</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- IT Services -->
        <div class="col-lg-6 col-12 mt-4 pt-2">
          <div class="card border-0 shadow rounded overflow-hidden">
            <div class="row g-0 align-items-center">
              <div class="col-md-4 bg-primary">
                <div class="p-4 text-center">
                  <i class="uil uil-server text-white display-4"></i>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">IT Services</h5>
                  <p class="text-muted mb-3">Comprehensive IT support, system administration, network management, and technical consulting.</p>
                  <ul class="list-unstyled text-muted">
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>System Administration</li>
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>Network Management</li>
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>Technical Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Software -->
        <div class="col-lg-6 col-12 mt-4 pt-2">
          <div class="card border-0 shadow rounded overflow-hidden">
            <div class="row g-0 align-items-center">
              <div class="col-md-4 bg-primary">
                <div class="p-4 text-center">
                  <i class="uil uil-cog text-white display-4"></i>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Custom Software</h5>
                  <p class="text-muted mb-3">Tailored software solutions designed specifically for your business processes and requirements.</p>
                  <ul class="list-unstyled text-muted">
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>Tailored Solutions</li>
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>Process Automation</li>
                    <li class="mb-1"><i class="uil uil-check text-primary me-2"></i>Business Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Consulting Section -->
    <!-- Causing weird line issues TODO fix this-->
    <div class="container mt-100 mt-60">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
          <img :src="consultingImage" class="img-fluid rounded shadow" alt="Technical Consulting">
        </div>
        <div class="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="section-title ms-lg-4">
            <h4 class="title mb-4">Technical Consulting</h4>
            <p class="text-muted">
              Not sure which technology stack is right for your project? Need help planning your software architecture?
              Our consulting services provide expert guidance to help you make informed decisions.
            </p>
            <ul class="list-unstyled text-muted">
              <li class="mb-2"><i class="uil uil-check-circle text-primary me-2"></i>Technology Stack Selection</li>
              <li class="mb-2"><i class="uil uil-check-circle text-primary me-2"></i>Architecture Design & Review</li>
              <li class="mb-2"><i class="uil uil-check-circle text-primary me-2"></i>Performance Optimization</li>
              <li class="mb-2"><i class="uil uil-check-circle text-primary me-2"></i>Security Audits</li>
              <li class="mb-2"><i class="uil uil-check-circle text-primary me-2"></i>Code Quality Assessment</li>
            </ul>
            <div class="mt-4">
              <a href="/contact" class="btn btn-primary">Schedule Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Process Section -->
    <!-- TODO The arrows are not aligned with each other.  Could probably be fixed with grid settings.-->
    <div class="container mt-100 mt-60">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <div class="section-title mb-4 pb-2">
            <h4 class="title mb-4">Our Process</h4>
            <p class="text-muted para-desc mx-auto mb-0">
              We follow a proven development process to ensure quality and timely delivery.
            </p>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-3 col-12 mt-4 pt-2">
          <div class="card features feature-clean process-arrow explore-feature text-center border-0">
            <div class="icons text-primary text-center mx-auto">
              <i class="uil uil-comment-alt-notes d-block rounded h3 mb-0"></i>
            </div>
            <div class="card-body">
              <h5 class="text-dark">1. Consultation</h5>
              <p class="text-muted mb-0">We discuss your requirements and goals</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-12 mt-4 pt-2">
          <div class="card features feature-clean process-arrow explore-feature text-center border-0">
            <div class="icons text-primary text-center mx-auto">
              <i class="uil uil-ruler-combined d-block rounded h3 mb-0"></i>
            </div>
            <div class="card-body">
              <h5 class="text-dark">2. Planning</h5>
              <p class="text-muted mb-0">We create a detailed project roadmap</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-12 mt-4 pt-2">
          <div class="card features feature-clean process-arrow explore-feature text-center border-0">
            <div class="icons text-primary text-center mx-auto">
              <i class="uil uil-code-branch d-block rounded h3 mb-0"></i>
            </div>
            <div class="card-body">
              <h5 class="text-dark">3. Development</h5>
              <p class="text-muted mb-0">We build your solution with regular updates</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-12 mt-4 pt-2">
          <div class="card features feature-clean explore-feature text-center border-0">
            <div class="icons text-primary text-center mx-auto">
              <i class="uil uil-rocket d-block rounded h3 mb-0"></i>
            </div>
            <div class="card-body">
              <h5 class="text-dark">4. Deployment</h5>
              <p class="text-muted mb-0">We launch and provide ongoing support</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="container mt-100 mt-60">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="section-title text-center">
            <h4 class="title mb-4">Ready to Get Started?</h4>
            <p class="text-muted para-desc mx-auto mb-0">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <div class="mt-4">
              <a href="/contact" class="btn btn-primary me-2">Contact Us</a>
              <a href="/about" class="btn btn-outline-primary">Learn More About Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footers />
  <backtotop />
</template>

<script setup>
import navbar from '@/bb/navbar.vue';
import headerImage from '../bb/assets/bg-developer.png';
import consultingImage from '../bb/assets/pixeltrue-web-development-1.svg';
import shape from '@/components/shape-light.vue';
import Footers from '@/bb/components/Footer.vue';
import backtotop from '@/bb/back-to-top.vue';
</script>

<style lang="scss" scoped>
.process-arrow {
  position: relative;
}

.process-arrow::after {
  content: '→';
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: var(--bs-primary);
}

@media (max-width: 768px) {
  .process-arrow::after {
    content: '↓';
    right: auto;
    left: 50%;
    top: auto;
    bottom: -20px;
    transform: translateX(-50%);
  }
}
</style>