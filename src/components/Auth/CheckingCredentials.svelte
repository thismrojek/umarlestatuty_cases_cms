<script lang="ts">
    import Auth from "@lib/Auth";
    import Const from "@type/Const";
    import { onMount } from "svelte";
    import AuthAnimation from "./AuthAnimation.svelte";

    onMount(() => {
        const CredentialsManager = new Auth();
        const credentials = CredentialsManager.getCredentials();

        console.log(credentials);
        
    })
</script>

<section class="checkingCredentials">
   <AuthAnimation /> 
</section>