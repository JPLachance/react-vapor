(window.webpackJsonp=window.webpackJsonp||[]).push([[1078],{2226:function(r,n,a){"use strict";a.r(n),n.default="@import '~coveo-styleguide/scss/common/palette.scss';\r\n@import '~coveo-styleguide/scss/variables.scss';\r\n\r\n.statusCard {\r\n    position: relative;\r\n    background: $pure-white;\r\n    border-left: $status-card-border-width solid transparent;\r\n    border-radius: $border-radius;\r\n    box-shadow: $table-shadow;\r\n\r\n    &:global(.simple) {\r\n        background: transparent;\r\n        box-shadow: none;\r\n    }\r\n\r\n    :global(.spinner) {\r\n        position: absolute;\r\n        top: 50%;\r\n        width: 100%;\r\n        transform: translateY(-50%);\r\n    }\r\n}\r\n\r\n.statusCardIcon {\r\n    margin: $status-card-padding;\r\n}\r\n\r\n.statusCardTitle {\r\n    margin: $status-card-padding-y $status-card-padding $status-card-text-margin 0;\r\n    font-size: $default-font-size;\r\n\r\n    :global(.simple) & {\r\n        margin: 0 $status-card-margin $status-card-text-margin;\r\n    }\r\n}\r\n\r\n.statusCardInfo {\r\n    margin: 0 $status-card-padding $status-card-padding-y 0;\r\n    font-size: $title-font-size;\r\n\r\n    :global(.simple) & {\r\n        margin: 0 $status-card-margin;\r\n    }\r\n}\r\n\r\n:global(.status-card-wrapper) {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n\r\n    .statusCard {\r\n        width: calc((100% - #{$status-card-margin} * 3) / 4);\r\n        margin-right: $status-card-margin;\r\n        margin-bottom: $status-card-margin;\r\n\r\n        &:nth-child(4n) {\r\n            margin-right: 0;\r\n        }\r\n\r\n        &:global(.simple) {\r\n            width: $status-card-small-width;\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=1078.bundle.js.map