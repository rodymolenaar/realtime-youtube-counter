<template>
    <heading></heading>
    <div class="container">
        <spinner v-if="isLoading"></spinner>
        <div v-if="!isLoading">
            <div class="card">
                <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from './components/Heading.vue'
import Spinner from './components/Spinner.vue'

export default {
    data() {
        return {
            isLoading: true,
            name: 'Realtime YouTube Counter'
        };
    },
    ready() {
        this.isLoading = false;
    },
    components: {
        Heading,
        Spinner
    }
};
</script>
