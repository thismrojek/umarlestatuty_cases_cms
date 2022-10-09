<script lang="ts">
    import Auth from "@lib/Auth";
    import { authState } from "@stores/authState";
    import { onMount } from "svelte";
    import AuthAnimation from "./AuthAnimation.svelte";

    let authVerified: boolean;

    onMount(async () => {
        const CredentialsManager = new Auth();
        authVerified = await CredentialsManager.verifyCredentials();
        authState.set(authVerified);
    });
</script>

<section class="checkingCredentials">
    {#if !authVerified}
        <AuthAnimation bind:authVerified />
    {/if}
</section>
