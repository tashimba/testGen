import { defineStore } from "pinia";
import { fetchAccessToken, fetchAddItems } from "../../api/api";

export const useCrmStore = defineStore("crm", {
  state: () => ({
    isAuth: false,
    isLoading: false,
    createdItems: JSON.parse(
      sessionStorage.getItem("createdItems") || "[]"
    ) as {
      name: string;
      id: string;
    }[],
    selectedValue: "",
    selectValues: [
      { value: "leads", label: "Сделка" },
      { value: "contacts", label: "Контакт" },
      { value: "companies", label: "Компания" },
    ],
  }),

  actions: {
    async fetchAccessToken() {
      this.isAuth = true;
      try {
        await fetchAccessToken();
      } catch (err) {
        console.error(err);
      } finally {
        this.isAuth = false;
      }
    },

    async createItem() {
      this.isLoading = true;
      try {
        const createdItemId = await fetchAddItems(this.selectedValue);
        const selectedLabel = this.selectValues.find(
          (item) => item.value === this.selectedValue
        )?.label;

        if (selectedLabel) {
          this.createdItems.push({
            name: selectedLabel,
            id: createdItemId,
          });
          sessionStorage.setItem(
            "createdItems",
            JSON.stringify(this.createdItems)
          );
        }
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    isDisabled: (state) => state.selectedValue === "",
  },
});
