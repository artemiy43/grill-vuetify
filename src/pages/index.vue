<template>
  <main class="d-flex flex-column justify-center align-center">
    <section class="d-flex flex-column justify-center align-center ga-7 py-12">
      <v-card class="pa-8" flat>
        <v-card-item>
          <p
            class="text-h5 text-center text-uppercase font-weight-bold text-sm-h2"
          >
            Bondar Grill House
          </p>
          <p class="text-h6 text-center font-weight-bold text-sm-h4">
            Лучшие гриль рестораны в Санкт-Петербурге и Уфе
          </p>
        </v-card-item>
      </v-card>
      <v-card width="100%">
        <v-carousel class="carousel" height="500px">
          <v-carousel-item v-for="img in images" :key="img.id" :src="img.src" />
        </v-carousel>
      </v-card>
    </section>
    <section class="d-flex flex-column justify-center align-center">
      <v-timeline class="w-100 w-md-75" side="end">
        <v-timeline-item
          class="text-body-1 pa-0"
          dot-color="red"
          size="15"
          width="100%"
        >
          <v-card class="timelineItemm">
            <p class="text-h6 text-md-h4 text-center">О нас</p>
            <p>
              Добро пожаловать в Bondar Grill House – место, где сочетаются
              уютная атмосфера, непревзойденные вкусы и лучшие традиции
              гриль-кухни!
            </p>
            <br>
            <p>
              Нашей основной задачей является создание уникального места, где
              каждый гость может насладиться великолепными блюдами,
              приготовленными на открытом огне. Мы тщательно отбираем самые
              свежие ингредиенты и используем только качественное мясо, чтобы
              каждая порция стала настоящим кулинарным произведением искусства.
            </p>
            <br>
            <p>
              В нашем меню вы найдете широкий ассортимент блюд, от классических
              мясных деликатесов до оригинальных авторских рецептов, которые
              приятно удивят даже самых искушенных гурманов. Мы верим, что еда –
              это не только процесс, но и искусство, поэтому мы стремимся
              обеспечить вам не только насыщение, но и гармонию вкусов.
            </p>
            <br>
            <p>
              Bondar Grill House – это не только о еде. Мы создаем атмосферу,
              где вы можете расслабиться с друзьями и провести время в кругу
              близких, наслаждаясь вкусными блюдами и уникальными коктейлями.
              Наши дружелюбные сотрудники всегда рады помочь вам с выбором и
              гарантируют отличный сервис.
            </p>
            <br>
            <p>
              Приходите к нам, и откройте для себя мир гриль-кухни в Bondar
              Grill House – вашем новом любимом месте для отдыха и наслаждения!
            </p>
          </v-card>
        </v-timeline-item>
        <v-timeline-item dot-color="blue" size="15" width="100%">
          <v-card
            class="card_sale text-center timelineItemm d-flex flex-column ga-1 flex-wrap justify-center"
          >
            <v-card-item class="text-h6 text-md-h4 text-center">Акции</v-card-item>
            <div class="d-flex flex-column flex-sm-row justify-center">
              <v-card-item v-for="sale in sales" :key="sale.id" class="border">
                <v-card-title>{{ sale.name }}</v-card-title>
                <v-card-subtitle class="text-wrap">{{
                  sale.text
                }}</v-card-subtitle>
              </v-card-item>
            </div>
          </v-card>
        </v-timeline-item>
        <v-timeline-item dot-color="green" size="15" width="100%">
          <v-card
            class="card_sale text-center timelineItemm d-flex flex-column ga-1 flex-lg-row flex-wrap justify-center"
          >
            <p class="text-h6 text-md-h4 text-center">Адреса ресторанов</p>
            <v-card-item
              v-for="address in addresses"
              :key="address.id"
              class="border w-100"
            >
              <v-card-title class="text-wrap">{{
                address.address
              }}</v-card-title>
            </v-card-item>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </section>
  </main>
</template>

<script lang="ts" setup>
  import { addresses, images, sales } from '@/utils/constants.ts'
</script>

<style lang="css" scoped>
.carousel {
  min-width: 320px;
  width: 100%;
}

.timelineItemm {
  padding: 100px 60px;
  width: 100%;
  min-width: 280px;
}

@media (max-width: 600px) {
  /* … */
  .carousel {
    width: 100%;
  }
  .timelineItemm {
    padding: 20px;
  }
  .v-timeline-item__opposite {
    padding: none;
  }
}
</style>
