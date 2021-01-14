<template>

    <!-- Заголовок(меню) -->
    <!--<section class="breadcrumbs">-->
        <!--<div class="container-fluid">-->
            <!--<div class="d-flex justify-content-between align-items-center">-->
                <!--&lt;!&ndash; Верхнее меню &ndash;&gt;-->
                <!--<slot name="left-link-menu">-->

                <!--</slot>-->

                <!--&lt;!&ndash;<slot name="right-button-menu">&ndash;&gt;-->

                <!--&lt;!&ndash;</slot>&ndash;&gt;-->

                <!--&lt;!&ndash;<button type="button" class="btn btn-mdb-color waves-effect btn-sm"&ndash;&gt;-->
                <!--&lt;!&ndash;style="margin: 0px 0px 0px auto; color:white;"&ndash;&gt;-->
                <!--&lt;!&ndash;data-toggle="modal" data-target="#fullHeightModalRight">&ndash;&gt;-->
                <!--&lt;!&ndash;Создание объектов&ndash;&gt;-->
                <!--&lt;!&ndash;</button>&ndash;&gt;-->

            <!--</div>-->
        <!--</div>-->
    <!--</section>-->
    <!-- / Заголовок(меню) -->

    <!-- ======= DbControl Content Section ======= -->
    <section class="blog" style="margin:0px; padding:0px; border:0px red solid">
        <div class="container-fluid" style="margin:0px; padding:0px;">
            <div class="row-flex">

                <!--- Левая панель --->
                <div class="leftPanel">
                     <div class="sidebar-left">
                        <div class="content__left_panel"
                            style="border:0px red solid; margin-top:0px">

                            <div class="content__panel_header">
                                <slot name="left-panel-header"/>
                            </div><hr>

                            <slot name="left-panel"/>

                        </div>
                     </div>
                </div>
                <!--- / Левая панель --->

                <!--- Центральная  панель --->
                <div class="centerPanel mainContent" >
                     <div class="content__main_panel">
                        <div class="content__panel_header" style="margin-top:-2px;">

                            <!--<button @click="createObjPanelOpen=!createObjPanelOpen"-->
                            <!--class="btn btn-mdb-color waves-effect btn-sm"-->
                            <!--style="margin: 0px 0px 0px auto; color:white; border-radius: 0px;">-->
                            <!--Панель создание объектов-->
                            <!--</button>-->

                            <!--<div class="borderless">-->
                            <!--<button class="animeCustomBtn" style="padding:0px" >-->
                            <!--Конфигурацию базы по умолчанию-->
                            <!--</button>-->
                            <!--</div>-->
                            <!---->
                            <!--<div class="blue">-->
                            <!--<button class="animeCustomBtn" >Home</button>-->
                            <!--</div>-->

                            <slot name="content-panel-header"/>

                        </div><hr>

                        <slot name="content-panel"/>

                     </div>
                </div>
                <!--- / Центральная  панель --->

            </div><!-- End .row -->
        </div><!-- End .container -->
    </section><!-- End Blog Section -->

</template>

<script>
export default {
    name: "ContentSlot"
}
</script>

<style scoped>

</style>
