<script lang="ts">
    import AuthAnimation from "@images/auth.gif";
    import ErrorAnimation from "@images/error.gif";

    export let authVerified: boolean;
</script>

<section class="authAnimation">
    <img src={authVerified == false ? ErrorAnimation : AuthAnimation} alt="Auth animation">
</section>

<style lang="scss">
    .authAnimation {
        width: calc(100vw - 4rem);
        height: calc(100vh - 2rem);
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>