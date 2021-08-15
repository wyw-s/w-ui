<template>
<div class="w-select">
    <div class="w-input__wrapper">
        <input class="w-input__inner" v-model="value"/>
        <span>
            <i></i>
        </span>
    </div>
    <div class="w-select__dropdown">
        <div class="w-select__view">
            <ul class="w-select__warp">
                <li>

                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'WSelect',
    props: ['value'],
    data() {
        return {
            text: 'SELECT'
        }
    }
}
</script>

<style lang="less" scoped>
.w-select {
    //width: ;
    .w-input_warpper {
        width: 240px;
        height: 40px;
        .w-input__inner {
            outline: none;
            width: 100%;
            height: 100%;
        }
    }
    .w-select__dropdown {
        .w-select__view {
            .w-select__warp {

            }
        }
    }
}
</style>
