<template>
    <div class="footerarea" style="background-color: white;">
        <div class="container">
            <div class="footerarea__wrapper footerarea__wrapper__2 pt-4 pb-2">
                <div class="row justify-content-center">
                    <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12" data-aos="fade-up">
                        <div class="footerarea__inner footerarea__about__us">
                            <div class="footerarea__heading">
                                <h3 style="color: black;">{{ $t("footerlong_title") }}</h3>
                                <img src="../../public/LogoPWT.png" alt="logo" height="70" />
                            </div>
                            <div class="footerarea__heading">
                                <h3 style="color: black;">{{ $t("footerlong_title_spon") }}</h3>
                                <div class="d-flex gap-4">
                                    <img src="/img/logo/ursf2.jpg" height='60' alt="img" />
                                    <img src="/img/logo/escap.png" height='60' alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-5  col-md-6 col-sm-12 col-12" data-aos="fade-up">
                        <div class="footerarea__inner">

                            <div class="footerarea__list" >
                                <ul>
                                    <li>
                                        {{ $t("footerlong_title_contact_add") }}
                                    </li>
                                    <li>
                                        {{ $t("footerlong_title_contact_tel") }}
                                    </li>
                                    <li>
                                         {{ $t("footerlong_title_contact_email") }} depttransportlaos@gmail.com
                                    </li>
                                    <li>
                                        <a href="https://goo.gl/maps/jaLiar7ATJGSsCSa7"  target="_blank"><i class="icofont-google-map"></i> {{ $t("footerlong_title_contact_location") }}</a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=61557172274093" target="_blank" ><i class="icofont-facebook"></i> {{ $t("footerlong_title_contact_facebook") }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2  col-md-4 col-sm-12" data-aos="fade-up">
                        <div class="d-flex justify-content-center">
                            <a href="https://play.google.com/store/apps/details?id=link.mpwt.dotsmart" class="btn btn-success" target="_blank" >{{ $t('download_app') }}</a>
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
                    <p class="mb-0 text-dark">{{ $t('footer_dev_by') }}: <a href="https://www.datacom.la/" target='_BLANK' className='text-primary'>Datacom Co., Ltd.</a> 
                        & <a href="https://iddrives.co.th/web/" className='text-primary' target='_BLANK'>ID Drives Co., Ltd.</a></p>
                </div>
            </div>
        </div>
    </div>
</template>