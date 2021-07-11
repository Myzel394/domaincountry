<template>
    <form
        class="panel-section panel-section-formElements"
        @submit.prevent="submitForm"
    >
        <div :class="$classNames(['panel-formElements-item', $style.item])">
            <label
                for="allowBadge"
                :class="$style.label"
            >
                {{ translate("options_form_allowBadge") }}
            </label>
            <input
                id="allowBadge"
                v-model="formAllowBadge"
                type="checkbox"
                name="allowBadge"
            />
        </div>
        <div :class="$classNames(['panel-formElements-item', $style.item, !formAllowBadge && $style.disabledItem])">
            <label
                for="badgeColor"
                :class="$style.label"
            >
                {{ translate("options_form_badgeColor") }}
            </label>
            <input
                id="badgeColor"
                v-model="formBadgeColor"
                type="color"
                name="badgeColor"
            />
        </div>
        <button
            type="submit"
            :class="$style.button"
        >
            {{ translate('saveText') }}
        </button>
    </form>
</template>

<script>
export default {
    name: "Form",
    props: {
        allowBadge: {
            type: Boolean,
            required: true,
        },
        badgeColor: {
            type: String,
            required: true,
        },
    },
    methods: {
        submitForm() {
            this.$emit("update", {
                allowBadge: this.formAllowBadge,
                badgeColor: this.formBadgeColor,
            });
        },
    },
    data() {
        return {
            formAllowBadge: this.allowBadge,
            formBadgeColor: this.badgeColor,
        }
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables";

.disabledItem {
    filter: grayscale(1);
    pointer-events: none;
}

.label {
    color: $primaryColor;
    font-size: 1rem;
    margin-right: 1em;
    font-weight: 700;
}

.item {
    margin-bottom: 2em;
}

.button {
    font-weight: 900;
    font-size: .8rem;

    color: $primaryColor;
    background-color: rgba($primaryColor, .2);

    width: 100%;
    padding: 1em 2em;

    border-radius: 10em;
    border: none;

    cursor: pointer;

    transition: .2s;
    will-change: background-color;
}

.button:hover {
    background-color: rgba($primaryColor, .5);
}
</style>
