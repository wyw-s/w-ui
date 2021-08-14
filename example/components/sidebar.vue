<template>
    <div class="component-nav">
        <ul>
            <li class="nav-item" v-for="(item, index) in resource" :key="index">
                <template v-if="item.groups">
                    <div>{{ item.name }}</div>
                    <div v-for="group in item.groups">
                        <div>{{ group.groupName }}</div>
                        <ul>
                            <li v-for="(navItem, index) in group.list" :key="index">
                                <router-link :to="'/component' + navItem.path">{{ navItem.title }}</router-link>
                            </li>
                        </ul>
                    </div>
                </template>
                <router-link v-else :to="'/component' + item.path">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['resource']
}
</script>

<style lang="less" scoped>
.component-nav {
    //width: 18%;
}
</style>
