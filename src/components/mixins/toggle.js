export const toggle = {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggle: function(){
          this.isOpen = !this.isOpen;
        }
    }
}