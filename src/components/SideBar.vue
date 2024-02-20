<script setup lang="ts">

const items = [
    { text: 'Главная', value: 'main', img: 'https://yastatic.net/naydex/yandex-search/c1Uu6n321/bfa145yNqyYI/XWZxjzqbLTTmI0G2HdyeFBXc85n4uWFe24rulMvwnWV8922KImLGhb7Ne9t8tKECQVXjCXRY4avS9lcdLD4S7Uxytfs7TohQx_YBNi2Mv8HB7eJcWPyw-v5KeoTuIA3wL1H6rTVEATaJaiw5vTSkZ3SEN_mQ7jcw' },
    { text: 'Категории', value: 'categories', img: 'https://yastatic.net/naydex/yandex-search/c1Uu6n321/bfa145yNqyYI/XWZxjzqbLTTmI0G2HdyeFBXc85n4uWFe24r-pN6l_WCZt32_AuL2gPuoa65ZJJEXEUCGXATYpP7CgwIoXDsSTdxCtdt7HuhQt7YBNi2Mv8HB7eJcWPyw-v5KeoTuIA3wL1H6rTVEATaJaiw5vTSkZ3SEN_mQ7jcw' },
    { text: 'Мой профиль', value: 'myProfile', img: 'https://yastatic.net/naydex/yandex-search/c1Uu6n321/bfa145yNqyYI/XWZxjzqbLTTmI0G2HdyeFBXc85n4uWFe24qe1Ev1vXUJx03KoneW8K7dWz4ZgeSnVPAzKXFYUZuChiddGT5XPdxitdt7bvhQ99YBNi2Mv8HB7eJcWPyw-v5KeoTuIA3wL1H6rTVEATaJaiw5vTSkZ3SEN_mQ7jcw' },
    { text: 'Корзина', value: 'cart', img: 'https://yastatic.net/naydex/yandex-search/c1Uu6n321/bfa145yNqyYI/XWZxjzqbLTTmI0G2HdyeFBXc85n4uWFe24-ehDvQjXAJwj3qUvfmgIu9e87ZNNHnIeWWaTEoUV4y5ic9HC53TdwCtcub7rgQl9YBNi2Mv8HB7eJcWPyw-v5KeoTuIA3wL1H6rTVEATaJaiw5vTSkZ3SEN_mQ7jcw' },
    { text: 'О нас', value: 'aboutUs', img: 'https://yastatic.net/naydex/yandex-search/c1Uu5n733/bfa145yNqyYI/XWZxjzqbLTTmI0G2HdyeFBXc85n4uWFe24-LlFvA3eAZt3iqMnLG8J7N3r7ZgbHHZPCGORRY0d7yxhc4TG_iLRlTZZsbPy3lAtKh98lNjxGl7IPpaDxAyy6_fpRtNir3DoH6TAX1gVdKaE5LHPUwZ4V2QO' },
]


</script>

<template>
    <v-navigation-drawer expand-on-hover rail>
        <v-list>
            <v-list-item
                prepend-avatar="https://yastatic.net/naydex/yandex-search/c1Uu6n321/bfa145yNqyYI/XWZxjzqbLTTmI0G2HdyeFBXc85n4uWFe248rsUtVnYV8t03at1KD5e7dbu55NKTXAYDWDHRYsU7X83ItDF4SXcwStfsrTthw15YBNi2Mv8HB7eJcWPyw-v5KeoTuIA3wL1H6rTVEATaJaiw5vTSkZ3SEN_mQ7jcw"
                title="Zhenissov Daniyar" subtitle="Zhenissov Daniyar">

            </v-list-item>
        </v-list>
        <v-divider />
        <v-list density="compact" nav>
            <v-list-item v-for="item in items" :prepend-avatar="item.img" :title="item.text" :value="item.value" />
        </v-list>
    </v-navigation-drawer>
</template>