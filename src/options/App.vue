<template>
    <Container>
        <NotAllowedPage v-if="!storage.isEnabled" />
        <ErrorPage v-else-if="storage.isError" />
        <LoadingPage v-else-if="storage.isLoading" />
        <Form
            v-else
            :allow-badge="storage.data.allowBadge"
            :badge-color="storage.data.badgeColor"
            :query-api-url="storage.data.queryAPIURL"
            :allow-search-bar-icon="storage.data.allowSearchBarIcon"
            @update="updateStorage"
        />
    </Container>
</template>

<script>
import storageSetup from "@/options/storageSetup";
import ErrorPage from "@/options/components/pages/ErrorPage";
import NotAllowedPage from "@/options/components/pages/NotAllowedPage";
import LoadingPage from "@/options/components/pages/LoadingPage";
import Container from "@/options/components/functional/Container";
import Form from "@/options/components/Form";

export default {
    name: "App",
    components: { Form, LoadingPage, Container, ErrorPage, NotAllowedPage },
    setup() {
        return storageSetup();
    },
    methods: {
        async updateStorage(options) {
            await this.saveData(options);
        },
    },
}
</script>

<style lang="scss">
@import "src/assets/global";
</style>
