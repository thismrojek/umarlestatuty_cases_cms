<script>
    import CheckingCredentials from "@components/Auth/CheckingCredentials.svelte";
    import CasesList from "@components/Cases/CasesList.svelte";
    import Header from "@components/Header/Header.svelte";
    import Layout from "@components/Layout.svelte";
    import { authState } from "@stores/authState";
</script>

<Layout>
  {#if $authState}
    <Header />
    <CasesList />
  {:else}
    <CheckingCredentials />
  {/if}
</Layout>