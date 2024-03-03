function Questions(){
    return(
        <section id="faq" className="faq section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Frequently Asked Questions</h2>
      <p>
       
      </p>
    </div>
    <div id="question" className="faq-list">
      <ul>
        <li data-aos="fade-up">
          <i className="bx bx-help-circle icon-help" />{" "}
          <a
            data-bs-toggle="collapse"
            className="collapse"
            data-bs-target="#faq-list-1"
          >
            How much kicking should I feel? When should I be concerned?{" "}
            <i className="bx bx-chevron-down icon-show" />
            <i className="bx bx-chevron-up icon-close" />
          </a>
          <div
            id="faq-list-1"
            className="collapse show"
            data-bs-parent=".faq-list"
          >
            <p>
            I bring this up all the time with my patients because I know new moms get worried. Most first-time moms won’t feel any movement (kicking) until about 5 months of pregnancy. With a second pregnancy, you typically feel movement earlier because you’re more familiar with what it feels like.

Once you start feeling the fetus move, you should feel something every day until about 7 months.

If you start to feel less movement than what you think is normal, you can ask your ob-gyn if they recommend kick counts. This is a test where you time how long it takes for you to feel 10 movements. Do the counts after your biggest meal of the day, because that’s typically when there is the most movement.
            </p>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay={100}>
          <i className="bx bx-help-circle icon-help" />{" "}
          <a
            data-bs-toggle="collapse"
            data-bs-target="#faq-list-2"
            className="collapsed"
          >
             Do I really need to sleep on my left side? Can I sleep on my belly?{" "}
            <i className="bx bx-chevron-down icon-show" />
            <i className="bx bx-chevron-up icon-close" />
          </a>
          <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
            <p>
            A lot of women read online that they should sleep on their left side throughout their entire pregnancy, but that’s difficult and not necessary. You can sleep on either side, right or left.

You just want to avoid sleeping on your back later in pregnancy. As your belly grows, sleeping on your back puts more pressure on the blood vessels that supply blood to your uterus. If you find yourself sleeping on your back in your second or third trimester, don’t panic. Just turn to one side or the other.
            </p>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay={200}>
          <i className="bx bx-help-circle icon-help" />{" "}
          <a
            data-bs-toggle="collapse"
            data-bs-target="#faq-list-3"
            className="collapsed"
          >
            Is it normal to be short of breath?{" "}
            <i className="bx bx-chevron-down icon-show" />
            <i className="bx bx-chevron-up icon-close" />
          </a>
          <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
            <p>
            Yes, it’s perfectly normal. You may find you can go up a flight of stairs with very little effort, but you are short of breath. Shortness of breath can start early in pregnancy—it has to do with how pregnancy hormones affect the lungs. But if you have shortness of breath along with chest pain, a cough, or heart palpitations, if you’re feeling faint, or if there’s a major change in your breathing, then you need to contact your ob-gyn.
            </p>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay={300}>
          <i className="bx bx-help-circle icon-help" />{" "}
          <a
            data-bs-toggle="collapse"
            data-bs-target="#faq-list-4"
            className="collapsed"
          >
            Are there any foods I should avoid during pregnancy?{" "}
            <i className="bx bx-chevron-down icon-show" />
            <i className="bx bx-chevron-up icon-close" />
          </a>
          <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
            <p>
            This is the number one question I get.You don’t want to eat something that might contain bacteria that could make you sick. Pregnant women are more likely to get very sick from bacteria in food, which can be dangerous for you and your pregnancy.Risky foods include raw or undercooked meat, fish, and eggs. To avoid problems, cook food thoroughly and wash your hands, knives, and cutting boards after handling raw meat or fish. Avoid homemade mayonnaise and dressings that use raw eggs. Cook scrambled eggs thoroughly.
            </p>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay={400}>
          <i className="bx bx-help-circle icon-help" />{" "}
          <a
            data-bs-toggle="collapse"
            data-bs-target="#faq-list-5"
            className="collapsed"
          >
            Can I keep exercising? Or can I start a new exercise routine?{" "}
            <i className="bx bx-chevron-down icon-show" />
            <i className="bx bx-chevron-up icon-close" />
          </a>
          <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
            <p>
            If you’re already active, we encourage you to continue exercising. We recommend 30 minutes of moderate exercise most days of the week, for 150 minutes total each week. Walking, swimming, and yoga are some of the safest exercises you can do while pregnant. Some sports should be avoided, primarily if there’s a risk of falling or impact to the abdomen. These sports include skiing, off-road cycling, and contact sports like soccer or basketball. Also avoid gymnastics, horseback riding, scuba diving, and skydiving. 
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

    )
}

export default Questions;