<script lang="ts">
    import { currentlyEditedCase } from "@stores/currentlyEditedCase";

    export let caseData;

    function setAsCurrentlyEditedCase() {
        const { id } = caseData;
        currentlyEditedCase.set(id);
    }
</script>

<article on:click={setAsCurrentlyEditedCase} class="case">
    <section class="basicData">
        <h2>
            {caseData.caseId} 
            <status>({caseData.status.toLowerCase()})<status>
        </h2>
        <p>{caseData.school}</p>
    </section>
</article>

<style lang="scss">
    .case {
        display: flex;
        align-items: end;
        border: 1px solid #EDF2F7;
        border-radius: 3px;
        padding: 25px;
        margin-bottom: 16px;
        flex-direction: column;
        cursor: pointer;

        @media (min-width: 900px) {
            flex-direction: row;
        }

        .basicData {
            width: 100%;
            
            h2 {
                font-size: 18px;
                font-weight: 600;

                status {
                    font-weight: 400;
                }
            }

            h3 {
                font-size: 18px;
                font-weight: 500;
                margin-top: 12px;
            }

            ul {
                padding: 0;
                list-style-position: inside;
                margin-top: 12px;

                li:not(:first-of-type) {
                    margin-top: 8px;
                }
            }
        }
    }
</style>