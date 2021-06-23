<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-lg-12">
                        <div class="Feature_main mt-3">
                            <div class="row">
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="Feature_Item elevation-1 text-center">
                                        <a class="FI_Link d-block" href="">
                                            <h2>00</h2>
                                            <i class="fas fa-carrot"></i>
                                            <p>Employee managment</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="Feature_Item elevation-1 text-center">
                                        <a class="FI_Link w-100 d-block" href="">
                                            <h2>00</h2>
                                            <i class="fas fa-boxes"></i>
                                            <p>Employee managment</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="Feature_Item elevation-1 text-center">
                                        <a class="FI_Link w-100 d-block" href="">
                                            <h2>00</h2>
                                            <i class="fas fa-bezier-curve"></i>
                                            <p>Employee managment</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="Feature_Item elevation-1 text-center">
                                        <a class="FI_Link w-100 d-block" href="">
                                            <h2>00</h2>
                                            <i class="fas fa-award"></i>
                                            <p>Employee managment</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="Feature_Item elevation-1 text-center">
                                        <a class="FI_Link w-100 d-block" href="">
                                            <h2>00</h2>
                                            <i class="fas fa-atom"></i>
                                            <p>Employee managment</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="Feature_Item elevation-1 text-center">
                                        <a class="FI_Link w-100 d-block" href="">
                                            <h2>00</h2>
                                            <i class="fab fa-app-store"></i>
                                            <p>Employee managment</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="Feature_Item elevation-1 text-center">
                                        <a class="FI_Link d-block" href="">
                                            <h2>00</h2>
                                            <i class="fab fa-app-store-ios"></i>
                                            <p>Employee managment</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="Feature_Item elevation-1 text-center">
                                        <a class="FI_Link w-100 d-block" href="">
                                            <h2>00</h2>
                                            <i class="fas fa-braille"></i>
                                            <p>Employee managment</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="Feature_Item elevation-1 text-center">
                                        <a class="FI_Link w-100 d-block" href="">
                                            <h2>00</h2>
                                            <i class="fas fa-chess"></i>
                                            <p>Employee managment</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="Feature_Item elevation-1 text-center">
                                        <a class="FI_Link w-100 d-block" href="">
                                            <h2>00</h2>
                                            <i class="fas fa-cogs"></i>
                                            <p>Employee managment</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="Feature_Item elevation-1 text-center">
                                        <a class="FI_Link w-100 d-block" href="">
                                            <h2>00</h2>
                                            <i class="fab fa-deskpro"></i>
                                            <p>Employee managment</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6">
                                    <div class="Feature_Item elevation-1 text-center">
                                        <a class="FI_Link w-100 d-block" href="">
                                            <h2>00</h2>
                                            <i class="fab fa-earlybirds"></i>
                                            <p>Employee managment</p>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <!-- AREA CHART -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Area Chart</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="chart">
                                    <canvas id="areaChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->

                        <!-- DONUT CHART -->
                        <div class="card card-danger">
                            <div class="card-header">
                                <h3 class="card-title">Donut Chart</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                            <div class="card-body">
                                <canvas id="donutChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->

                        <!-- PIE CHART -->
                        <div class="card card-danger">
                            <div class="card-header">
                                <h3 class="card-title">Pie Chart</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                            <div class="card-body">
                                <canvas id="pieChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->

                    </div>
                    <!-- /.col (LEFT) -->
                    <div class="col-md-6">
                        <!-- LINE CHART -->
                        <div class="card card-info">
                            <div class="card-header">
                                <h3 class="card-title">Line Chart</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="chart">
                                    <canvas id="lineChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->

                        <!-- BAR CHART -->
                        <div class="card card-success">
                            <div class="card-header">
                                <h3 class="card-title">Bar Chart</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="chart">
                                    <canvas id="barChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->

                        <!-- STACKED BAR CHART -->
                        <div class="card card-success">
                            <div class="card-header">
                                <h3 class="card-title">Stacked Bar Chart</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="chart">
                                    <canvas id="stackedBarChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->

                    </div>
                    <!-- /.col (RIGHT) -->
                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
