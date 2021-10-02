<template>
    <form
        class="panel-section panel-section-formElements"
        @submit.prevent="submitForm"
    >
        <form-element
            id="allowBadge"
            :label='$translate("pages@options@form@allow_badge@label")'
        >
            <input
                id="allowBadge"
                v-model="formAllowBadge"
                type="checkbox"
                name="allowBadge"
            />
        </form-element>
        <form-element
            id="badgeColor"
            :class="!formAllowBadge && $style.disabledItem"
            :label='$translate("pages@options@form@badge_color@label")'
        >
            <input
                id="badgeColor"
                v-model="formBadgeColor"
                type="color"
                name="badgeColor"
            />
        </form-element>
        <form-element
            id="queryAPIUrl"
            :label='$translate("pages@options@form@query_api_url@label")'
        >
            <div :class="$style.vertical">
                <input
                    id="queryAPIUrl"
                    v-model="formQueryApiUrl"
                    type="url"
                    name="queryAPIUrl"
                />
                <p :class="$style.description">
                    {{ $translate("pages@options@form@query_api_url@description") }}
                </p>
            </div>
        </form-element>
        <button
            type="submit"
            :class="$style.button"
        >
            {{ $translate("extra@text@save_now") }}
        </button>
    </form>
</template>

<script>
import FormElement from "./functional/FormElement";
export default {
    name: "Form",
    components: { FormElement },
    props: {
        allowBadge: {
            type: Boolean,
            required: true,
        },
        badgeColor: {
            type: String,
            required: true,
        },
        queryApiUrl: {
            type: String,
            required: true,
        },
    },
    methods: {
        submitForm() {
            this.$emit("update", {
                allowBadge: this.formAllowBadge,
                badgeColor: this.formBadgeColor,
                queryApiUrl: this.formQueryApiUrl,
            });
        },
    },
    data() {
        return {
            formAllowBadge: this.allowBadge,
            formBadgeColor: this.badgeColor,
            formQueryApiUrl: this.queryApiUrl,
        }
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables";

.disabledItem {
    filter: grayscale(1);
    opacity: .6;
    pointer-events: none;
}

.button {
    font-weight: 900;
    font-size: 1.1rem;
    text-align: center;

    color: $primaryColor;
    background-color: rgba($primaryColor, .2);

    width: 100%;
    padding: .8em 1em;

    border-radius: 10em;
    border: none;

    cursor: pointer;

    transition: .2s;
    will-change: background-color;
}

.button:hover {
    background-color: rgba($primaryColor, .5);
}

.description {
    font-size: .8rem;
    color: $secondaryColor;
}

.vertical {
    display: flex;
    flex-direction: column;
}
</style>
