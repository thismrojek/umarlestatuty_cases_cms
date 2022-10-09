import { cases } from "@stores/cases";
import { currentlyEditedCase } from "@stores/currentlyEditedCase";
import { filters } from "@stores/filters";
import type { Writable } from "svelte/store";
import REST from "../data/REST";

export default class Cases {
    constructor() {
        this.refetchCases();
        this.listenForKeywords();
    }

    private async refetchCases(keywords: string = '') {
        const Rest = new REST();
        const casesData = await Rest.request.cases.get(keywords);
        
        this.getStore().set(casesData);
    }

    private listenForKeywords() {
        let typingInterval: any = setInterval(_caller => null, 10000);
        const clearTypingInterval = () => clearInterval(typingInterval);

        filters.subscribe(async (keywords: string) => {
            clearTypingInterval();
            
            const fetchCases = async () => {
                await this.refetchCases(keywords);
                clearTypingInterval();
            }
            typingInterval = setInterval(fetchCases, 350);
        });
    }

    public getStore(): Writable<any> {
        return cases;
    }

    public getCurrentlyEditedCaseData() {
        let currentlyEditedCaseData;

        currentlyEditedCase.subscribe(id => {
            if (id) {
                this.getStore().subscribe(casesData => {
                    currentlyEditedCaseData = casesData.find(caseData => caseData.id == id);
                })
            }
        })

        return currentlyEditedCaseData;
    }
}