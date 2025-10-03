<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-7">
                <h5>Job Description: </h5>
                <p class="text-muted">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more
                    frequently than others - which creates a distinct visual impression. Moreover, in Latin only words
                    at the beginning of sentences are capitalized.</p>
                <p class="text-muted">This means that Lorem Ipsum cannot accurately represent, for example, German, in
                    which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler
                    for German texts. If the fill text is intended to illustrate the characteristics of different
                    typefaces.</p>
                <p class="text-muted">It sometimes makes sense to select texts containing the various letters and
                    symbols specific to the output language.</p>

                <h5 class="mt-4">Responsibilities and Duties: </h5>
                <p class="text-muted">It sometimes makes sense to select texts containing the various letters and
                    symbols specific to the output language.</p>
                <ul class="list-unstyled">
                    <li v-for="item in datas.slice(0, 7)" :key="item" class="text-muted mt-2"><i
                            data-feather="arrow-right" class="fea icon-sm text-primary me-2"></i>{{ item }}</li>
                </ul>

                <h5 class="mt-4">Required Experience, Skills and Qualifications: </h5>
                <p class="text-muted">It sometimes makes sense to select texts containing the various letters and
                    symbols specific to the output language.</p>
                <ul class="list-unstyled mb-0">
                    <li v-for="item in datas.slice(7, 15)" :key="item" class="text-muted mt-2"><i
                            data-feather="arrow-right" class="fea icon-sm text-primary me-2"></i>{{ item }}</li>
                </ul>
            </div>

            <div class="col-lg-4 col-md-5 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div class="card sidebar sticky-bar rounded shadow ms-lg-5 border-0">
                    <div class="card-body widget border-bottom">
                        <h5 class="mb-0">Job Information</h5>
                    </div>

                    <div class="card-body">
                        <div class="d-flex widget align-items-center">
                            <i class="uil uil-user me-3 h4"></i>
                            <div class="flex-1">
                                <h5 class="widget-title mb-0">Employee Type:</h5>
                                <p class="text-muted mb-0">Full Time</p>
                            </div>
                        </div>

                        <div class="d-flex widget align-items-center mt-3">
                            <i class="uil uil-map-marker me-3 h4"></i>
                            <div class="flex-1">
                                <h5 class="widget-title mb-0">Location:</h5>
                                <p class="text-muted mb-0">Beijing, China</p>
                            </div>
                        </div>

                        <div class="d-flex widget align-items-center mt-3">
                            <i class="uil uil-airplay me-3 h4"></i>
                            <div class="flex-1">
                                <h5 class="widget-title mb-0">Job Type:</h5>
                                <p class="text-muted mb-0">Back-end Developer</p>
                            </div>
                        </div>

                        <div class="d-flex widget align-items-center mt-3">
                            <i class="uil uil-briefcase-alt me-3 h4"></i>
                            <div class="flex-1">
                                <h5 class="widget-title mb-0">Experience:</h5>
                                <p class="text-muted mb-0">+2 Year</p>
                            </div>
                        </div>

                        <div class="d-flex widget align-items-center mt-3">
                            <i class="uil uil-graduation-cap me-3 h4"></i>
                            <div class="flex-1">
                                <h5 class="widget-title mb-0">Qualifications:</h5>
                                <p class="text-muted mb-0">MSCIT</p>
                            </div>
                        </div>

                        <div class="d-flex widget align-items-center mt-3">
                            <i class="uil uil-usd-circle me-3 h4"></i>
                            <div class="flex-1">
                                <h5 class="widget-title mb-0">Salary:</h5>
                                <p class="text-muted mb-0">+50k to 70k</p>
                            </div>
                        </div>

                        <div class="d-flex widget align-items-center mt-3">
                            <i class="uil uil-calendar-alt me-3 h4"></i>
                            <div class="flex-1">
                                <h5 class="widget-title mb-0">Date posted:</h5>
                                <p class="text-muted mb-0 mb-0">18th Sep, 2020</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div><!--end col-->
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import feather from 'feather-icons';

const datas = ref(['Participate in requirements analysis', 'Write clean, scalable code using C# and .NET frameworks', 'Test and deploy applications and systems', 'Revise, update, refactor and debug code', 'Improve existing software', 'Develop documentation throughout the software development life cycle (SDLC)', 'Serve as an expert on applications and provide technical support', 'Proven experience as a .NET Developer or Application Developer', 'good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.', 'Experience designing, developing and creating RESTful web services and APIs', 'Basic know how of Agile process and practices', 'Good understanding of object-oriented programming.', 'Good understanding of concurrent programming.', 'Sound knowledge of application architecture and design.', 'Excellent problem solving and analytical skills']);

onMounted(() => {
    feather.replace()
})

</script>

<style lang="scss" scoped></style>