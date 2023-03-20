 <footer class="row py-3 px-md-4 mx-0 text-light">
    <div class="col-md-2 mb-3 mb-md-0">
        <img src="/images/qluecodes.png" title="logo" loading='eager' alt="{{ env('APP_NAME') }}" width="80" height="30">
    </div>
    <div class="col-md-10">
        <div class="row mx-0 justify-content-center text-capitalize">
            <div class="col-12 col-sm-6">
                <a class="d-block my-1" href="/about">about</a>
                <a class="d-block my-1" href="/admin/dashboard">Admin</a>
                <a class="d-block my-1" href="/categories">Categories</a>
                <a class="d-block my-1" href="/tags">Tags</a>
            </div>

            <div class="col-12 col-sm-6">
                <a class="d-block my-1" href="/terms">Terms Of Service</a>
                <a class="d-block my-1" href="/privacy">privacy policy</a>
                <a class="d-block my-1" href="/contact">Contact</a>
                <a class="d-block my-1" href="/sitemap">Sitemap</a>

            </div>
            
        </div>
    </div>
    {{-- <div class="col-12 text-center mt-3 text-danger">
        {{env('APP_NAME')}} @ {{date('Y')}}, All rights reserved.
    </div> --}}
</footer>