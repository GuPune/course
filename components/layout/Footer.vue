<template>
    <div class="footerarea" style="background-color: white;">
        <div class="container">
            <div class="footerarea__wrapper footerarea__wrapper__2 py-5">
                <div class="row justify-content-center">
                    <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12" data-aos="fade-up">
                        <div class="footerarea__inner footerarea__about__us">
                            <div class="footerarea__heading">
                                <h3 style="color: black;">{{ $t("footerlong_title") }}</h3>
                                <img src="../../public/LogoPWT.png" alt="logo" width="120" />
                            </div>
                            <div class="footerarea__heading">
                                <h3 style="color: black;">{{ $t("footerlong_title_spon") }}</h3>
                                <div class="d-flex gap-4">
                                    <img src="/img/logo/ursf2.jpg" width='110' alt="img" />
                                    <img src="/img/logo/escap.png" width='130' alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-5  col-md-6 col-sm-12 col-12" data-aos="fade-up">
                        <div class="footerarea__inner">
                            <div class="footerarea__heading" >
                                <h3>{{ $t("footerlong_title_contact1") }}</h3>
                            </div>

                            <div class="footerarea__list" >
                                <ul>
                                    <li>
                                        <a href="#" style="color: black;">{{ $t("footerlong_title_contact_add") }}</a>
                                    </li>
                                    <li>
                                        <a href="#" style="color: black;">  {{ $t("footerlong_title_contact_tel") }}</a>
                                    </li>
                                    <li>
                                        <a href="#" style="color: black;"> {{ $t("footerlong_title_contact_email") }} depttransportlaos@gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="https://dot-smart.mpwt.gov.la/#/contact-us" style="color: black;" target="_blank"><i class="icofont-google-map"></i> {{ $t("footerlong_title_contact_location") }}</a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/people/ກົມຂົນສົ່ງ-ກຊ-ຍທຂ/61557172274093/" target="_blank" style="color: black;"><i class="icofont-facebook"></i> {{ $t("footerlong_title_contact_depart") }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2  col-md-4 col-sm-12" data-aos="fade-up">
                        <div class="d-flex justify-content-center">
                            <a href="https://play.google.com/store/apps/details?id=link.mpwt.dotsmart&hl=en-TH" class="btn btn-success" target="_blank" style="color: black;background-color: #FEF301;">Download App</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div style="background-color: #FEF301;">
        <div class="container">
            <div class="row py-3">
                <div class="col-12 col-xl-7 col-lg-7 text-center text-lg-start">
                    <p class="mb-0 text-dark"> {{ $t("footer_copyright") }} @ {{ $t("footer_copyright_last") }} </p>
                </div>
                <div class="col-12 col-xl-5 col-lg-5 text-center text-lg-end">
                    <p class="mb-0 text-dark">Developed by: <a href="https://www.datacom.la/" target='_BLANK' className='text-primary'>Datacom Co.,Ltd</a> & <a href="https://iddrives.co.th/web/" className='text-primary' target='_BLANK'>ID Drives Co., Ltd</a></p>
                </div>
            </div>
        </div>
    </div>
</template>