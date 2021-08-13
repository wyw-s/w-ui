<template>
    <header class="header">
        <div class="container">
            <h1>ui
                <!--<router-link>00</router-link>-->
            </h1>

            <!-- nav -->
            <ul class="nav">
                <li class="nav-item nav-algolia-search">
                    <!--<algolia-search></algolia-search>-->
                </li>
                <li class="nav-item">rthty
                    <!--<router-link>{{ 'langConfig.guide' }}</router-link>-->
                </li>
            </ul>
        </div>
    </header>
</template>
<style lang="less" scoped>
.header {
    height: 60px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 60px;
    z-index: 100;
    position: relative;

    .container {
        height: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #DCDFE6;
    }

    .nav-lang-spe {
        color: #888;
    }

    h1 {
        margin: 0;
        float: left;
        font-size: 32px;
        font-weight: normal;

        a {
            color: #333;
            text-decoration: none;
            display: block;
        }

        span {
            font-size: 12px;
            display: inline-block;
            width: 34px;
            height: 18px;
            border: 1px solid rgba(255, 255, 255, .5);
            text-align: center;
            line-height: 18px;
            vertical-align: middle;
            margin-left: 10px;
            border-radius: 3px;
        }
    }

    .nav {
        float: right;
        height: 100%;
        line-height: 80px;
        background: transparent;
        padding: 0;
        margin: 0;
        &::before, &::after {
            display: table;
            content: "";
        }
        &::after {
            clear: both;
        }
    }

    .nav-gap {
        position: relative;
        width: 1px;
        height: 80px;
        padding: 0 20px;

        &::before {
            content: '';
            position: absolute;
            top: calc(50% - 8px);
            width: 1px;
            height: 16px;
            background: #ebebeb;
        }
    }

    .nav-logo,
    .nav-logo-small {
        vertical-align: sub;
    }

    .nav-logo-small {
        display: none;
    }

    .nav-item {
        margin: 0;
        float: left;
        list-style: none;
        position: relative;
        cursor: pointer;

        &.nav-algolia-search {
            cursor: default;
        }

        &.lang-item,
        &:last-child {
            cursor: default;
            margin-left: 34px;

            span {
                opacity: .8;
            }

            .nav-lang {
                cursor: pointer;
                display: inline-block;
                height: 100%;
                color: #888;

                &:hover {
                    color: #409EFF;
                }
                &.active {
                    font-weight: bold;
                    color: #409EFF;
                }
            }
        }

        a {
            text-decoration: none;
            color: #1989FA;
            opacity: 0.5;
            display: block;
            padding: 0 22px;

            &.active,
            &:hover {
                opacity: 1;
            }

            &.active::after {
                content: '';
                display: inline-block;
                position: absolute;
                bottom: 0;
                left: calc(50% - 15px);
                width: 30px;
                height: 2px;
                background: #409EFF;
            }
        }
    }
}

.nav-dropdown {
    margin-bottom: 6px;
    padding-left: 18px;
    width: 100%;

    span {
        display: block;
        width: 100%;
        font-size: 16px;
        color: #888;
        line-height: 40px;
        transition: .2s;
        padding-bottom: 6px;
        user-select: none;

        &:hover {
            cursor: pointer;
        }
    }

    i {
        transition: .2s;
        font-size: 12px;
        color: #979797;
        transform: translateY(-2px);
    }

    .is-active {
        span, i {
            color: #409EFF;
        }
        i {
            transform: rotateZ(180deg) translateY(3px);
        }
    }

    &:hover {
        span, i {
            color: #409EFF;
        }
    }
}

.nav-dropdown-list {
    width: auto;
}
</style>
