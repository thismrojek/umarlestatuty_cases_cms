<script lang="ts">
    import SearchSVG from "@images/search.svg";
    import { filters } from "@stores/filters";

    export let placeholder: string;

    const setKeywordsFilter = event => {
        const typedKeywords: string = event.target.value;
        filters.set(typedKeywords);
    }
</script>

<section class="search">
    <div class="icon">
        <img src={SearchSVG} alt="search icon">
    </div>
    <input on:input={setKeywordsFilter} {placeholder}>
</section>

<style lang="scss">
    .search {
        grid-column: 1 / 3;

        @media (min-width: 900px) {
            grid-column: 1 / 2;
        }
        
        input {
            background: #EDF2F7;
            border: none;
            border-radius: 3px;
            outline: none;
            height: 48px;
            width: 100%;
            padding-left: 50px; 
            font-family: Montserrat;
        }

        .icon {
            img {
                position: absolute;
                transform: translate(100%, 85%);
            }
        }
    }
</style>