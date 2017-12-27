<template>
    <Menu ref="sideMenu" :active-name="$route.name" :open-names="openNames" :theme="menuTheme" width="auto" @on-select="changeMenu">
        <template v-for="(item, index) in menuList">
            <MenuItem v-if="item.children.length<=1" :name="item.children[0].name" :key="'menu-item'+index">
                <Icon :type="item.icon" :size="iconSize" :key="'icon'+index"></Icon>
                <span class="layout-text" :key="'text'+index">{{ itemTitle(item) }}</span>
            </MenuItem>

            <Submenu v-if="item.children.length > 1" :name="item.name" :key="'sub-menu'+index">
                <template slot="title">
                    <Icon :type="item.icon" :size="iconSize"></Icon>
                    <span class="layout-text">{{ itemTitle(item) }}</span>
                </template>
                <template v-for="(child, index) in item.children">
                    <MenuItem :name="child.name" :key="'menu-item'+index">
                        <Icon :type="child.icon" :size="iconSize" :key="child.name"></Icon>
                        <span class="layout-text" :key="'menu-item-text'+index">{{ itemTitle(child) }}</span>
                    </MenuItem>
                </template>
            </Submenu>
        </template>
    </Menu>
</template>
<script>
export default {
    name: 'SidebarMenu',
    props: {
        menuList: Array,
        iconSize: Number,
        menuTheme: {
            type: String,
            default: 'dark'
        },
        openNames: {
            type: Array
        }
    },
    methods: {
        changeMenu (active) {
            this.$emit('on-change', active);
        },
        itemTitle (item) {
            if (typeof item.title === 'object') {
                return this.$t(item.title.i18n);
            } else {
                return item.title;
            }
        }
    },
    updated () {
        this.$nextTick(() => {
            if (this.$refs.sideMenu) {
                this.$refs.sideMenu.updateOpened();
            }
        });
    }

};
</script>
<style lang="stylus" scoped>
   .ivu-shrinkable-menu
        height 100%
        width 100%
</style>
