<template>
    <div class="container page-component">
        <div class="sidebar-view">
            <side-bar :resource="navData"></side-bar>
        </div>
        <div class="markdown-body-view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import sideBar from '@/components/sidebar.vue';
import navData from '@/router/nav.config.json';
export default {
    components: {
        sideBar
    },
    data() {
        return {
            navData
        }
    }
}
</script>

<style lang="less" scoped>
.page-component {
    position: relative;
    overflow-y: auto;

    .sidebar-view {
        position: absolute;
        width: 240px;
        height: 100%;
        border-right: 1px solid #d7dde4;
    }
    .markdown-body-view {
        box-sizing: border-box;
        overflow: auto;
        height: 100%;
        width: 1140px;
        padding-left: 270px;
    }

    &.page-container {
        padding: 0;
    }

    .page-component__nav {
        width: 240px;
        position: fixed;
        top: 0;
        bottom: 0;
        margin-top: 80px;
        transition: padding-top .3s;

        > .el-scrollbar__wrap {
            height: 100%;
            overflow-x: auto;
        }

        &.is-extended {
            padding-top: 0;
        }
    }

    .side-nav {
        height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 0;

        & > ul {
            padding-bottom: 50px;
        }
    }

    .page-component__content {
        padding-left: 270px;
        padding-bottom: 100px;
        box-sizing: border-box;
    }

    .content {
        padding-top: 50px;

        >* {
            h3 {
                margin: 55px 0 20px;
            }

            table {
                border-collapse: collapse;
                width: 100%;
                background-color: #fff;
                font-size: 14px;
                margin-bottom: 45px;
                line-height: 1.5em;

                strong {
                    font-weight: normal;
                }

                td, th {
                    border-bottom: 1px solid #dcdfe6;
                    padding: 15px;
                    max-width: 250px;
                }

                th {
                    text-align: left;
                    white-space: nowrap;
                    color: #909399;
                    font-weight: normal;
                }

                td {
                    color: #606266;
                }

                th:first-child, td:first-child {
                    padding-left: 10px;
                }
            }

            ul:not(.timeline) {
                margin: 10px 0;
                padding: 0 0 0 20px;
                font-size: 14px;
                color: #5e6d82;
                line-height: 2em;
            }
        }
    }
}
</style>
