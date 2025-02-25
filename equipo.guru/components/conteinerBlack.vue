<template>
  <div class="container mx-auto px-4">
    <div class="relative p-[2px] rounded-[10px] bg-gradient-to-b from-grey-shades-50 to-grey-shades-6 w-full max-w-[YOUR_WIDTH] mx-auto">
      <div 
        class="rounded-[10px] w-full min-h-[100px]
               pt-4 px-[6px] sm:p-6 lg:p-8
               flex justify-center items-center flex-wrap
               bg-gradient-to-b from-grey-shades-10 to-grey-shades-6"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>