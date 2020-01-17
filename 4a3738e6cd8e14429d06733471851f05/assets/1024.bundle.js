(window.webpackJsonp=window.webpackJsonp||[]).push([[1024],{2167:function(r,n,e){"use strict";e.r(n),n.default="@import '~coveo-styleguide/scss/common/palette.scss';\r\n@import '~coveo-styleguide/scss/variables.scss';\r\n\r\n.diffViewer {\r\n    :global(.d2h-file-wrapper) {\r\n        border: none;\r\n    }\r\n\r\n    :global(.d2h-file-diff) {\r\n        overflow: initial;\r\n    }\r\n\r\n    :global(.d2h-file-header) {\r\n        display: none;\r\n    }\r\n\r\n    :global(.d2h-code-wrapper) {\r\n        position: relative;\r\n    }\r\n\r\n    :global(.d2h-diff-table) {\r\n        font-size: $code-font-size;\r\n        font-family: $code-font-family;\r\n        border-bottom: $default-border;\r\n    }\r\n\r\n    :global(.d2h-code-linenumber) {\r\n        top: -#{$diff-line-ajustment};\r\n        width: auto;\r\n        height: calc(#{$diff-line-height} + #{$diff-line-ajustment});\r\n        margin-top: $diff-line-ajustment;\r\n        color: $dark-grey;\r\n        background: $white;\r\n        border: none;\r\n        border-left: $default-border;\r\n        cursor: initial;\r\n\r\n        &:global(.d2h-change) {\r\n            background: $white;\r\n        }\r\n    }\r\n\r\n    :global(.line-num1),\r\n    :global(.line-num2) {\r\n        width: $diff-line-number-width;\r\n    }\r\n\r\n    :global(tr:last-child) :global(.d2h-code-linenumber) {\r\n        height: calc(#{$diff-line-height} - #{$diff-line-ajustment});\r\n    }\r\n\r\n    :global(tr) {\r\n        position: relative;\r\n        display: block;\r\n    }\r\n\r\n    :global(td) {\r\n        border-right: $default-border;\r\n    }\r\n\r\n    :global(td:last-child) {\r\n        display: block;\r\n    }\r\n\r\n    :global(td.d2h-info) {\r\n        height: auto;\r\n        line-height: normal;\r\n        background: none;\r\n        border: $default-border;\r\n        border-right: none;\r\n        border-left: none;\r\n\r\n        &:global(.d2h-code-linenumber) {\r\n            top: 0;\r\n            width: calc(#{$diff-line-number-width} * 2 + #{$diff-line-number-width});\r\n            height: $diff-line-ajustment * 2;\r\n            margin-top: 0;\r\n            background: $pure-white;\r\n            border-right: none;\r\n            border-bottom: none;\r\n            border-left: none;\r\n        }\r\n    }\r\n\r\n    :global(tr:first-child) :global(td.d2h-info) {\r\n        border-top: none;\r\n    }\r\n\r\n    :global(.d2h-code-line) {\r\n        margin-left: $diff-line-number-width * 2;\r\n\r\n        &:global(.d2h-info) {\r\n            position: relative;\r\n            width: 100%;\r\n            margin-bottom: $diff-separator-margin;\r\n            margin-left: 0;\r\n            color: $pure-white;\r\n            font-size: 0;\r\n            background: $pure-white;\r\n            border-bottom: 2px solid $medium-grey;\r\n\r\n            &:before {\r\n                position: absolute;\r\n                top: 50%;\r\n                left: 0;\r\n                padding-bottom: $diff-separator-padding;\r\n                color: $dark-medium-grey;\r\n                font-size: $diff-separator-font-size;\r\n                line-height: $diff-separator-line-height;\r\n                background: white;\r\n                border: $default-border-size solid $white;\r\n                border-radius: $border-radius;\r\n                transform: translateY(-50%);\r\n                content: '...';\r\n                content: '...';\r\n            }\r\n        }\r\n    }\r\n\r\n    :global(.d2h-ins):not(:global(.d2h-code-linenumber)) {\r\n        background: $soft-green;\r\n    }\r\n\r\n    :global(.d2h-code-line),\r\n    :global(.d2h-code-side-line) {\r\n        :global(ins) {\r\n            background: $soft-green;\r\n        }\r\n    }\r\n\r\n    :global(.d2h-del):not(:global(.d2h-code-linenumber)) {\r\n        background: $soft-red;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=1024.bundle.js.map