<?php

use Dcat\Admin\Admin;
use Dcat\Admin\Layout\Content;
use D4T\Admin\Demos\Http\Controllers\Dashboards\PropSimplifiedDashboard;

Admin::registerLocale();

Admin::home(function(Content $content) {
        return PropSimplifiedDashboard::make($content);
} );
