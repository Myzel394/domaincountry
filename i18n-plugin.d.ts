declare module "vue/types/vue" {
    interface Vue {
        $translate: (key: string, placeholders?: any[]) => string;
    }
}
