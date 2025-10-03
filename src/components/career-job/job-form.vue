<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="features-absolute career-form bg-white p-4 rounded shadow">
                    <form>
                        <div class="row text-start">
                            <div class="col-lg-4 col-md-4">
                                <div class="mb-0">
                                    <input type="text" class="form-control" required placeholder="Keywords">
                                </div>
                            </div><!--end col-->

                            <div class="col-lg-8 col-md-8">
                                <div class="row align-items-center">
                                    <div class="col-md-4 mt-4 mt-sm-0">
                                        <div class="mb-0">
                                            <select class="form-select form-control">
                                                <option selected="">Location</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AX">&Aring;land Islands</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AS">American Samoa</option>
                                                <option value="AD">Andorra</option>
                                                <option value="AO">Angola</option>
                                                <option value="AI">Anguilla</option>
                                                <option value="AQ">Antarctica</option>
                                            </select>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-md-4 mt-4 mt-sm-0">
                                        <div class="mb-0">
                                            <select class="form-select form-control">
                                                <option selected="">Job Types</option>
                                                <option value="4">Accounting</option>
                                                <option value="1">IT & Software</option>
                                                <option value="3">Marketing</option>
                                                <option value="5">Banking</option>
                                            </select>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-md-4 mt-4 mt-sm-0">
                                        <div class="d-grid">
                                            <input type="submit" id="search" name="search"
                                                class="searchbtn btn btn-primary" value="Search">
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div><!--end col-->
                        </div><!--end row-->
                    </form><!--end form-->
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>

</script>

<style lang="scss" scoped></style>