<template>
  <section :class="$style.wrapperCards">
      <div>
        <div>
          <div :class="$style.cardContainer" id="demo">
            <a href="#" :class="$style.link" ><h2>Семейная ипотека</h2>
              <img src="@/assets/product-step-5.svg" width="100%">
            </a>
            <a href="#" :class="$style.link">
              <h2>Ипотека для IT</h2>
              <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg" width="100%">
            </a>
            <a href="#" :class="$style.link">
              <h2>Новостройка</h2>
              <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/apartment_rent_o0ut.svg" width="100%">
            </a>
            <a href="#" :class="$style.link">
              <h2>Вторичное жильё</h2>
              <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/work_time_lhoj.svg" width="100%">
            </a>
            <a href="#" :class="$style.link">
              <h2>Господдержка</h2>
              <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/doctors_hwty.svg" width="100%">
            </a>
            <a href="#" :class="$style.link" >
              <h2>Study</h2>
              <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/exams_g4ow.svg" width="100%">
            </a>
          </div>
        </div>
      </div>
  </section>
</template>

<script>

</script>

<style module>
.wrapperCards {
  background: rgba(87, 172, 115, 1);
  background: linear-gradient(
      135deg,
      rgba(87, 172, 115, 1) 0%,
      rgba(21, 151, 207, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#57ac73",
      endColorstr="#1597cf",
      GradientType=1
  );
  overflow-x: hidden;
  font-family: sans-serif;
  padding: 70px;
}

.cardContainer {
  display: flex;
  padding: 2rem 1rem;
}

.link {
  text-decoration: none;
  color:#08a652;
}

.cardContainer .link {
  flex: 1;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.2);
}

.link h2 {
  font-size: 22px;
}

.cardContainer .link:not(:first-child) {
  margin-left: -10rem;
}

.link img {
  padding: 35px;
  width: 70%;
  display: block;
  margin: 0 auto;
}

.cardContainer .link:hover,
.cardContainer .link:focus {
  transform: translateY(-1rem);
  outline: none;
}

.cardContainer .link:hover ~ .link,
.cardContainer .link:focus ~ .link {
  transform: translateX(11rem);
}

@media (max-width: 767px) {
  #demo {
    margin-top: 0px;
  }

  .cardContainer {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0rem 1rem 2rem;
  }

  .cardContainer .link {
    flex: 1 1 100%;
    max-width: 200px;
  }

  .cardContainer .link:not(:first-child) {
    margin-left: 0rem;
    margin-top: 2rem;
  }

  .cardContainer .link:hover,
  .cardContainer .link:focus {
    transform: translateX(0rem);
  }

  .cardContainer .link:hover ~ .link,
  .cardContainer .link:focus ~ .link {
    transform: translateY(0rem);
  }

  .link img {
    padding: 5px;
  }
}
</style>