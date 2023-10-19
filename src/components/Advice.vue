<script>
export default {
  data: () => {
    return {
      advice: {
        id: 117,
        text: `It is easy to sit up and take notice, what's difficult is getting up and
        taking action.`,
      },
    };
  },
  mounted: function () {
    this.fetchAdvice();
  },
  methods: {
    fetchAdvice: function () {
      const apiUrl = 'https://api.adviceslip.com/advice';

      fetch(apiUrl)
        .then((result) => result.json())
        .then((data) => {
          const fetchedAdvice = data.slip;

          this.advice.id = fetchedAdvice.id;
          this.advice.text = fetchedAdvice.advice;
        });
    },
  },
};
</script>

<template>
  <div
    class="w-[342px] sm:w-[540px] sm:px-[48px] sm:pt-[48px] mx-auto bg-dark-advice rounded-[10px] text-center pt-[40px] px-[24px] relative pb-[70px] sm:pb-[80px]"
  >
    <p
      class="text-green text-xs mb-[24px] uppercase font-manrope font-extrabold"
    >
      advice #{{ advice.id }}
    </p>
    <p
      class="text-white text-2xl pb-[32px] font-manrope font-extrabold sm:pb-[48px]"
    >
      “{{ advice.text }}”
    </p>
    <div class="border-b-[1px] border-b-grayish-blue relative">
      <img
        class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-dark-advice px-[16px]"
        src="/quote-delimiter.png"
        alt=""
      />
    </div>
    <img
      @click="fetchAdvice"
      class="absolute block left-[50%] translate-x-[-50%] bottom-0 translate-y-[50%] cursor-pointer hover:shadow-green hover:shadow-lg rounded-full"
      src="/next-quote.png"
      alt="Get next quote"
    />
  </div>
</template>
