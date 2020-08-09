/* ==UserStyle==
@name          Google Earth Engine Dark Mode
@namespace     João Siqueira
@description	  A dark theme to Google Earth Engine
@author        João Siqueira
@homepage      https://github.com/joaosiqueira/dark-mode-gee
@updateURL    https://raw.githubusercontent.com/CharlieEtienne/material-github/master/material-github.user.css
@version       1.0
==/UserScript==*/

@-moz-document domain("code.earthengine.google.com") {
@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm) {
    html {
        --ee-legacy-red: #661565;
    }

    body {
        font-family: 'Inter', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Menlo', 'Monaco', 'Bitstream Vera Sans Mono', 'Consolas', 'source-code-pro', monospace!important;
        font-size: 14px!important;
    }

    #head > .user-box {
        background-color: #28262600;
        border-radius: 5px;
    }

    #head > .user-box .user {
        padding-right: 16px;
        left: 0px;
        top: -2px;
    }

    #head .project-label {
        background-color: #282626;
        border-radius: 5px;
        box-shadow: none;
    }

    .ace_editor {
        font-family: 'Ubuntu Mone', 'Monaco', 'Consolas', 'Menlo', 'source-code-pro', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', monospace!important;
        font-size: 15px!important;
        width: 100%;
        height: 100%;
        line-height: 28px;
    }

    #head {
        background-color: #21242f!important;
        background-image: none;
        border-bottom: 0px;
    }

    .ace_editor .ace_gutter {
        font-family: 'Droid Sans Mono', 'Ubuntu Mono', 'Menlo', 'Monaco', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Consolas', 'source-code-pro', monospace!important;
        background-color: #1b1e28!important;
        color: #d0caca30;
        border-right: 1px solid #21242f;
        font-size: 14px!important;
    }

    .inspect-panel {
        font-family: 'Inter', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Menlo', 'Monaco', 'Bitstream Vera Sans Mono', 'Consolas', 'source-code-pro', monospace!important;
        font-size: 14px!important;
        color: #ffffffc9
    }

    a {
        color: #fffa54;
        cursor: pointer;
        font-weight: unset;
        text-decoration: none;
    }

    .env-list > .env-gutter {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        background: #1b1e28;
        width: 41px;
    }

    .env-list {
        font-family: 'Inter', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Menlo', 'Monaco', 'Bitstream Vera Sans Mono', 'Consolas', 'source-code-pro', monospace!important;
        font-size: 12px!important;
        border-bottom: 5px #00000042 solid;
    }

    .env-entry-button {
        background-color: #000000a3;
    }

    .env-entry:hover .env-entry-button {
        background-color: #6f696f
    }

    .env-entry:hover .env-entry-button:hover {
        background-color: #7b0873a6
    }

    .ace-xcode {
        background-color: #21242f;
        color: rgb(231, 248, 248);
    }

    .ace_editor .ace-line {
        height: 24px!important;
        padding: 4px!important;
    }

    .env-list > .header,
    .env-list > .body {
        background: #21242f;
        color: #ddd7d7;
        border: 1px solid #21242f;
    }

    .ace_ee_instance,
    .ace_ee_static {
        color: #82ead5!important;
    }

    .ace_string {
        color: #fffa54!important;
    }

    .ace-xcode .ace_cursor {
        color: #fff;
    }

    .ace_numeric {
        color: #ea96dc!important;
    }

    .ace_comment {
        color: #949991!important;
    }

    .ace-xcode .ace_marker-layer .ace_active-line {
        background: rgba(0, 0, 0, .25);
    }

    .ace-xcode .ace_marker-layer .ace_selection {
        background: #3a4953a6;
    }

    .ace-xcode .ace_indent-guide {
        background: #0000;
    }

    .ace_storage,
    .ace_keyword,
    .ace_language:not(.ace_variable) {
        color: #b33b43fa!important;
        font-weight: normal;
    }

    .ace-xcode .ace_fold {
        background-color: #82ead5;
        border-color: #00000000;
    }

    .explorer .label {
        color: #82ead5;
        float: left;
        white-space: pre;
    }

    .env-entry-prefix {
        font-weight: bold;
        color: #b33b43fa;
    }

    .goog-splitpane-handle-vertical {
        background-repeat: no-repeat;
        background-position: center;
        border-color: #21242f;
        border-style: solid;
        border-width: 5px
    }

    .goog-splitpane-handle-horizontal {
        background-repeat: no-repeat;
        background-position: center;
        border-color: #21242f;
        border-style: solid;
        border-width: 5px
    }

    .panel > .header {
        background: #21242e;
        padding: 4px;
        color: #ffffff;
        font-size: 12px;
        font-weight: normal;
        line-height: 19px;
        user-select: none;
    }

    .tab-panel > .header .goog-tab {
        font-family: 'Inter', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Menlo', 'Monaco', 'Bitstream Vera Sans Mono', 'Consolas', 'source-code-pro', monospace!important;
        display: inline-block;
        font-size: 12px;
        cursor: pointer;
        padding: 0px 4px 0px 4px;
        position: relative;
        top: 1px;
        background: #21242e00;
        border: 3px solid #646a7b00;
        border-radius: 2px 2px 2px 2px;
        border-bottom-color: #7b0873a6;
        margin-right: 2px;
        color: #ffffffd6;
        flex-grow: 1;
    }

    .tab-panel > .header .goog-tab-selected {
        background: #0606064f;
        color: #ffffffd6;
    }

    .tab-panel > .header .goog-tab.alert {
        font-family: 'Inter', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Menlo', 'Monaco', 'Bitstream Vera Sans Mono', 'Consolas', 'source-code-pro', monospace!important;
        background: #7b0873cc;
        border-bottom-color: #51566300;
    }

    .goog-tab-bar.goog-tab-bar-horizontal.goog-tab-bar-top {
        display: -webkit-flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .inspect-panel {
        font-family: monospace;
    }

    .tree-manager .tree > .header {
        font-family: 'Inter', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Menlo', 'Monaco', 'Bitstream Vera Sans Mono', 'Consolas', 'source-code-pro', monospace!important;
        font-weight: normal;
        color: #82ead5d9;
        line-height: 25px;
    }

    .tree-manager .tree-item,
    .tree-manager .create-link {
        font-weight: normal;
        color: #dad759ab;
        font-style: normal;
        line-height: 25px;
    }
    .tree-item:hover {
        font-weight: normal;
        color: #dad759ab;
        font-style: normal;
    }
    .tree-manager .header {
        color: #82ead5;
        font-weight: bold;
    }

    .tree-manager .tree-file:before,
    .tree-drag-clone.tree-file:before,
    .tree-drag-clone.header:before {
        content: '';
        width: 14px;
        height: 14px;
        position: absolute;
        left: 3px;
        top: 1px;
        background-size: 14px;
        background-repeat: no-repeat;
        opacity: 0.8;
        color: #fdf96da3;
    }

    .tree-manager .tree-file:before,
    .tree-drag-clone.tree-file:before {
        background-image: url(https://www.gstatic.com/images/icons/material/system/1x/insert_drive_file_black_18dp.png);
    }

    pre {
        display: block;
        font-family: 'Inter', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Menlo', 'Monaco', 'Bitstream Vera Sans Mono', 'Consolas', 'source-code-pro', monospace!important;
        white-space: pre;
        margin: 1em 0px;
        background: #21242e;
        color: rgba(255, 255, 255, .7);
        border-top: 2px #00000042 solid;
    }

    hr {
        unicode-bidi: isolate;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
        margin-inline-start: auto;
        margin-inline-end: auto;
        overflow: hidden;
        border-style: inset;
        border-width: 10px;
        background: #000000c9
    }

    .panel > .content > .jfkScrollable-inner {
        padding: 4px 8px;
        width: auto;
        background: #21242e;
        box-sizing: border-box;
        line-height: 25px;
    }

    .editor-panel > .header {
        height: 24px;
        border-bottom: 1px solid #21242f;
        border-top: 1px solid #21242f;
    }

    .tab-panel > .header {
        height: 22px;
        border-bottom: 1px solid #21242f;
        border-top: 1px solid #21242f;
    }

    .panel > .header {
        height: 24px;
        border-bottom: 1px solid #21242f;
        border-top: 1px solid #21242f;
    }

    .jfk-button-action {
        background-image: -webkit-linear-gradient(top, #18191a, #18191a);
        background-color: #18191a;
        ;
        border: 1px solid #18191a;
        color: #fff;
    }

    .editor-panel > .header .goog-button {
        background-image: -webkit-linear-gradient(top, #18191a, #18191a);
        background-color: #18191a;
        ;
        border: 1px solid #18191a;
        color: #fff;
        height: 24px!important;
    }

    .editor-panel > .header .goog-button:hover {
        border-color: #18191a!important;
        color: #fff;
        height: 22px!important;
        background-color: #7b0873cc!important;
        background-image: -webkit-linear-gradient(top, #7b0873cc, #7b0873cc)!important;
        background-image: -moz-linear-gradient(top, #7b0873cc, #7b0873cc)!important;
        background-image: -ms-linear-gradient(top, #7b0873cc, #7b0873cc)!important;
        background-image: -o-linear-gradient(top, #7b0873cc, #7b0873cc)!important;
        background-image: linear-gradient(top, #7b0873cc, #7b0873cc)!important;
    }

    .goog-flat-menu-button {
        background-image: -webkit-linear-gradient(top, #18191a, #18191a);
        background-color: #18191a;
        border: 1px solid #18191a!important;
        color: #fff;
        height: 22px!important;
    }

    .goog-flat-menu-button-hover {
        background-image: -webkit-linear-gradient(top, #18191a, #18191a);
        background-color: #18191a;
        border: 0px solid #1a3664;
        color: #fff;
        height: 22px!important;
    }

    .goog-flat-menu-button-disabled {
        background-color: #18191a!important;
        border-color: #18191a!important;
        color: #18191a!important;
    }

    /* personalizar a barra em geral, aqui estou definindo 10px de largura para a barra vertical
e 10px de altura para a barra horizontal */
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    /* aqui é para personalizar o fundo da barra, neste caso estou colocando um fundo cinza escuro*/
    ::-webkit-scrollbar-track {
        background: #00000024;
        border-radius: 20px;
    }

    /* aqui é a alça da barra, que demonstra a altura que você está na página
estou colocando uma cor azul clara nela*/
    ::-webkit-scrollbar-thumb {
        background: #00000075;
        border-radius: 20px;
    }

    .tab-panel > .header .goog-tab-bar {
        border-top: 0px solid #18191a;
        border-bottom: 0px solid #18191a;
    }
    .task.completed .content {
        background-color: rgba(26, 54, 100, .7);
        color: #ffffffa8;
        border-radius: 0px;
    }

    .task.failed .content {
        background-color: rgba(100, 26, 26, .7);
        color: #ffffffa8;
        border-radius: 0px;
    }

    .task .content {
        background-color: #80868536;
        color: #ffffffa8;
        border-radius: 0px;
    }

    .task.awaiting-user-config .run-button {
        background: #000000a6;
        color: #ffffffa8;
        border-radius: 0px;
    }

    .task.awaiting-user-config .run-button:hover {
        background: #000000a6;
        border: 2px solid rgba(26, 54, 100, .7);
        color: #ffffffa8;
        border-radius: 0px;
    }

    .task.cancelled .content {
        background-color: rgba(8, 8, 8, .7);
        color: #ffffffa8;
        border-radius: 0px;
    }

    .task .info {
        border-radius: 10px;
        background: #00000036;
        color: #ffffffa8;
    }

    paper-button-menu,
    paper-button-menu-legacy {
        color: #fff;
        background: #641a1a!important;
    }

    input {
        background: #2122229c!important;
        border: 2px solid #0000001f!important;
    }

    .repo-manager .refresh-button {
        background-image: -webkit-linear-gradient(top, #18191a, #18191a)!important;
        background: #2122229c!important;
        border: 2px solid #0000001f!important;
    }

    .goog-menu {
        background-image: -webkit-linear-gradient(top, #21242e, #21242e)!important;
    }

    .goog-menuitem,
    .goog-tristatemenuitem,
    .goog-filterobsmenuitem {
        background-image: -webkit-linear-gradient(top, #21242e, #21242e)!important;
        color: #ffffffc2
    }

    .goog-menuitem-highlight .goog-submenu-arrow,
    .goog-menuitem-hover .goog-submenu-arrow {
        border-bottom-color: #9999991a;
        opacity: 0.0
    }

    .goog-modalpopup,
    .modal-dialog {
        background: #182230ed;
    }


    .modal-dialog-title {
        background-color: #18191a05;
        color: #fff;
    }

    .modal-dialog-buttons .goog-buttonset-action {
        background-color: #141414;
        background-image: -webkit-linear-gradient(top, #18191a, #18191a);
        background-image: -moz-linear-gradient(top, #18191a, #18191a);
        background-image: -ms-linear-gradient(top, #18191a, #18191a);
        background-image: -o-linear-gradient(top, #18191a, #18191a);
        background-image: linear-gradient(top, #18191a, #18191a);
        border: 1px solid #000;
        color: #fcfbfb;
    }
    .modal-dialog-content {
        background-color: #18191a05;
        color: #fff;
    }

    .modal-dialog-buttons .goog-buttonset-action:hover,
    .modal-dialog-buttons .goog-buttonset-action:active {
        background-color: #141414;
        background-image: -webkit-linear-gradient(top, #18191a, #18191a);
        background-image: -moz-linear-gradient(top, #18191a, #18191a);
        background-image: -ms-linear-gradient(top, #18191a, #18191a);
        background-image: -o-linear-gradient(top, #18191a, #18191a);
        background-image: linear-gradient(top, #18191a, #18191a);
        border: 2px solid #164178;
        color: #fcfbfb;
    }

    .goog-modalpopup-bg,
    .modal-dialog-bg {
        background: #254754c9;
        filter: blur(50px);
    }

    .tree-manager .button {
        background-color: #00000073;
    }

    .tree-manager .tree-file:hover,
    .tree-manager .tree-file.tree-item-selected {
        background: #00000073;
        cursor: pointer;
    }

    .tree-manager .header:hover {
        background: #00000073;
        cursor: pointer;
    }

    .editor-panel > .header .goog-flat-menu-button.goog-flat-menu-button:hover:after,
    .editor-panel > .header .goog-flat-menu-button.goog-flat-menu-button-open:after,
    .editor-panel > .header .goog-flat-menu-button.goog-flat-menu-button-active:after {
        opacity: 1.0
    }

    .goog-flat-menu-button-active .goog-flat-menu-button-dropdown,
    .goog-flat-menu-button-open .goog-flat-menu-button-dropdown,
    .goog-flat-menu-button-selected .goog-flat-menu-button-dropdown,
    .goog-flat-menu-button-hover .goog-flat-menu-button-dropdown {
        border-color: #0a0a0a rgba(0, 0, 0, .71);
    }

    .goog-flat-menu-button.goog-flat-menu-button-hover {
        background-color: #98f5ec30!important;
        background-image: -webkit-linear-gradient(top, #7b087300, #7b087300)!important;
        background-image: -moz-linear-gradient(top, #7b087300, #7b087300)!important;
        background-image: -ms-linear-gradient(top, #7b087300, #7b087300)!important;
        background-image: -o-linear-gradient(top, #7b087300, #7b087300)!important;
        background-image: linear-gradient(top, #7b087300, #7b087300)!important;
    }


    html {
        --primary-text-color: rgba(255, 255, 255, .75);
        --primary-background-color: rgba(24, 34, 48, .95);
    }

    .docs-list-popup {
        background: #0b1625f2;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

        border: 0px #0807078c solid;
        color: rgba(255, 255, 255, .77)
    }

    .docs-list-popup .docs-method-header {

        background: #0a0a0a;
        background: -moz-linear-gradient(top, #0a0a0a 0%, #0a0a0a 0%, #0a0a0a 100%);
        background: -webkit-linear-gradient(top, #0a0a0a 0%, #0a0a0a 0%, #0a0a0a 100%);
        background: -o-linear-gradient(top, #0a0a0a 0%, #0a0a0a 0%, #0a0a0a 100%);
        background: -ms-linear-gradient(top, #0a0a0a 0%, #0a0a0a 0%, #0a0a0a 100%);
        background: linear-gradient(top, #0a0a0a 0%, #0a0a0a 0%, #0a0a0a 100%);
        color: #ffffff;
        border-bottom: 1px #0a0a0a solid;
    }

    .docs-list {
        line-height: 25px;
        font-size: 14px;
        color: #82ead5
    }

    .docs-list .docs-method-header:hover,
    .docs-list-popup .docs-method-header {
        background: #00000073;
    }

    .zippy > .header:hover {
        background: #01010173;
    }

    .editor-suggest-doc {
        background: #0b1625f2;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

        border: 0px #0807078c solid;
        color: rgba(255, 255, 255, .77)
    }

    .task.running-on-client .indicator,
    .task.submitted-to-backend .indicator,
    .task.running-on-backend .indicator {
        background-image: url(https://user-images.githubusercontent.com/14841756/81140525-069f3f00-8f40-11ea-89a1-7748d0e4c0f9.gif);
    }

    .task.running-on-client .indicator,
    .task.submitted-to-backend .indicator,
    .task.running-on-backend .indicator {
        background-image: url(https://user-images.githubusercontent.com/14841756/81140525-069f3f00-8f40-11ea-89a1-7748d0e4c0f9.gif);
    }

    .task.running-on-client .indicator,
    .task.submitted-to-backend .indicator,
    .task.running-on-backend .indicator {
        background-image: url(https://user-images.githubusercontent.com/14841756/81140525-069f3f00-8f40-11ea-89a1-7748d0e4c0f9.gif);
    }

    .script-migration-dialog.loading::after {
        background: url(https://user-images.githubusercontent.com/14841756/81140525-069f3f00-8f40-11ea-89a1-7748d0e4c0f9.gif) left top no-repeat
    }

    .ui-thumbnail.loading::before {
        background: url(https://user-images.githubusercontent.com/14841756/81141107-f9834f80-8f41-11ea-9b57-dba954453679.gif) left top no-repeat;
        color: #777777fc;
        content: 'Generating thumbnail...';
        margin: 1;
        padding-left: 20px;
    }

    .ui-thumbnail {
        position: relative;
        display: flex;
        background-color: #21242e!important;
    }

    .repo-history-list-dialog.loading .modal-dialog-content {
        color: transparent;
        background: url(https://user-images.githubusercontent.com/14841756/81141107-f9834f80-8f41-11ea-9b57-dba954453679.gif) center center no-repeat
    }

    .console .error {
        background: rgba(187, 0, 0, .7);
        text-shadow: 0px 1.5px 1px rgba(128, 128, 128, 0);
    }

    .explorer.loading:before {
        content: url(https://user-images.githubusercontent.com/14841756/81141107-f9834f80-8f41-11ea-9b57-dba954453679.gif);
        float: left
    }

    .profile-viewer-status.loading:before {
        content: url(https://user-images.githubusercontent.com/14841756/81141107-f9834f80-8f41-11ea-9b57-dba954453679.gif);
        float: left
    }

    .tree-manager.loading .zippy > .header:before,
    .tree-manager .tree-folder.loading .zippy > .header:before,
    .tree-manager .zippy.loading > .header:before {
        content: url(https://user-images.githubusercontent.com/14841756/81141107-f9834f80-8f41-11ea-9b57-dba954453679.gif);
        float: left;
        opacity: 1;
        top: 1px;
        left: 1px;
        transform: initial!important
    }

    .asset-manager .project-list.loading::after {
        background: url(https://user-images.githubusercontent.com/14841756/81141107-f9834f80-8f41-11ea-9b57-dba954453679.gif) left top no-repeat;
        color: #777777;
        content: 'Loading assets...';
        margin: auto;
        padding-left: 20px
    }

    .asset-manager.loading .tree-list.has-message::before {
        background: url(https://user-images.githubusercontent.com/14841756/81141107-f9834f80-8f41-11ea-9b57-dba954453679.gif) left top no-repeat;
        color: #777777;
        content: 'Loading assets...';
        margin: auto;
        padding-left: 20px
    }

    .inspect-view.loading:before {
        content: url(https://user-images.githubusercontent.com/14841756/81141107-f9834f80-8f41-11ea-9b57-dba954453679.gif);
        left: -7px;
        top: 0px;
        position: absolute
    }

    .scripts-manager.loading:before {
        content: url(https://user-images.githubusercontent.com/14841756/81141107-f9834f80-8f41-11ea-9b57-dba954453679.gif);
        position: absolute;
        right: 25px;
        top: 6px
    }

    .inspect-view.loading:before {
        content: url(https://user-images.githubusercontent.com/14841756/81141107-f9834f80-8f41-11ea-9b57-dba954453679.gif);
        left: -7px;
        top: 0px;
        position: absolute
    }

    .scripts-manager.loading:before {
        content: url(https://user-images.githubusercontent.com/14841756/81141107-f9834f80-8f41-11ea-9b57-dba954453679.gif);
        position: absolute;
        right: 25px;
        top: 6px
    }

    .goog-menuitem-highlight .goog-menuitem-content,
    .goog-menuitem-hover .goog-menuitem-content {
        color: #bf0b88
    }

    .goog-menuitem-highlight,
    .goog-menuitem-hover {
        background-color: #eee;
        border-color: #eee0;
    }

    .ui-panel .stretch-vertical,
    .ui-panel .stretch-horizontal {
        color: #ffffffba!important;
        background: #21242e!important;
    }

    .ui-panel {
        background: #21242e!important;
    }


    .layout-flow-horizontal > .ui-widget.stretch-vertical style {
        border: 2px solid #000!important;
    }

    .jfk-select .goog-flat-menu-button-caption {
        overflow: hidden;
        width: 100%;
        top: -3px;
        background-color: #00000078;
        background-image: -webkit-linear-gradient(top, #fbfbfb00, #ffffff00);
        background-image: -moz-linear-gradient(top, #18191a, #18191a);
        background-image: -ms-linear-gradient(top, #18191a, #18191a);
        background-image: -o-linear-gradient(top, #18191a, #18191a);
        background-image: linear-gradient(top, #18191a, #18191a);
    }

    .ui-select .goog-flat-menu-button {
        margin: 0;
        background-color: #0000007a;
        background-image: -webkit-linear-gradient(top, #00000078, #00000078);
    }

    .jfk-select .goog-flat-menu-button-dropdown {
        background: url(https://img.icons8.com/material/24/000000/sort-down--v1.png) center no-repeat;
        border: none;
        height: 10px;
        margin-top: -7px;
        width: 10px;
    }

    .ui-button .jfk-button,
    .ui-select .jfk-select,
    .ui-textbox .jfk-textinput {
        font-family: 'Open Sans', sans-serif, monospace!important;
        font-size: 100%;
        width: 100%;
        box-sizing: border-box;
        color: #ffffffb5;
        background: #00000078!important;
        border: 0px solid #0000005e!important;
        border-radius: 0px;
    }

    .ui-textbox .jfk-textinput {
        color: #fff!important;
        border: 2px solid #00000045!important;
        background: #00000078!important;
        background-image: -webkit-linear-gradient(top, #000c, #000c)!important;
    }

    input {
        color: #ffffffd4;
    }

    .property-list .add-button {
        color: #9ab2f8;
    }

    .modal-dialog-buttons button {
        background-color: #00000078;
        background-image: -webkit-linear-gradient(top, #fbfbfb00, #ffffff00);
        background-image: -moz-linear-gradient(top, #18191a, #18191a);
        background-image: -ms-linear-gradient(top, #18191a, #18191a);
        background-image: -o-linear-gradient(top, #18191a, #18191a);
        background-image: linear-gradient(top, #18191a, #18191a);
    }

    .jfk-button-standard {
        background-color: #00000078;
        background-image: -webkit-linear-gradient(top, #fbfbfb00, #ffffff00);
        background-image: -moz-linear-gradient(top, #18191a, #18191a);
        background-image: -ms-linear-gradient(top, #18191a, #18191a);
        background-image: -o-linear-gradient(top, #18191a, #18191a);
        background-image: linear-gradient(top, #18191a, #18191a);
    }

    .ui-label a:not([href]) {
        cursor: text;
        color: #ffffff78;
        background: #21242f;
    }

    .map-control-list .layer > .expand {
        color: #000
    }

    .map-control-list:hover .title,
    .map-control-list.expanded .title {
        background: #342f2f;
        color: #ffffff;
        font-weight: bold
    }

    .map-control-list.layer-list:hover .title,
    .map-control-list.layer-list.expanded .title {
        background: #342f2f;
        color: #ffffff;
        font-weight: bold
    }

    .map-control-list.layer-list .title {
        text-align: center;
        color: #000;
    }

    .map-control-list .title {
        text-align: center;
        color: #000;
    }

    .inspect-panel .label {
        color: #82ead5;
        float: left;
        white-space: pre;
    }

    .ui-chart {
        height: 250px;
    }

    .inspect-panel .zippy > .header {
        line-height: 25px;
    }

    .jfk-checkbox-disabled,
    .jfk-checkbox-clearOutline.jfk-checkbox-disabled {
        background-color: #fff0;
        border: 1px solid #f1f1f124;
        cursor: no-drop;
    }

    .map-control-list .opacity-slider .goog-slider-thumb,
    .ee-visualizer .goog-slider-thumb {
        background: #342F2F;
    }

    #head {
        background-color: #21242f!important;
        border-bottom: 0px;
        height: 15px;
        padding: 15px;
    }

    .ee-search .search-textbox {
        color: #f5f5f5;
    }

    .ee-search .search-heading {
        background-color: #21242e;
        color: #990681;
        font-size: 15px;
    }

    .ee-search .search-result-primary {
        background-color: #21242e;
        color: #f5f5f5
    }

    #search-container > .ee-search .search-result {
        background-color: #21242e;
        color: #f5f5f5
    }

    .ee-search .search-section {
        border-bottom: 1px solid #0000;
        padding-bottom: 0px;
    }

    .ee-search .search-section.empty {
        opacity: 0.95;
        background-color: #000000;
    }
    .ee-search .search-results,
    .ee-search .featured-results {
        background: #0a0a0a;
        border: 2px solid #2b29296e;
        border-top-color: #2b29296e;
    }
}
}
