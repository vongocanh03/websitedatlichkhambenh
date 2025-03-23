import { Component } from "react"
import { connect } from "react-redux"


class About extends Component {
  render() {
    return (
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="container">
            <div className="about-hero-content">
              <h1>Về Chúng Tôi</h1>
              <p>Chăm sóc sức khỏe tận tâm - Dịch vụ y tế chất lượng cao</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="about-section mission-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="about-image">
                  <img src="/images/about/mission.jpg" alt="Sứ mệnh của VNA Health" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-content">
                  <h2 className="section-title">Sứ Mệnh Của Chúng Tôi</h2>
                  <p className="section-description">
                    VNA Health ra đời với sứ mệnh mang đến dịch vụ chăm sóc sức khỏe chất lượng cao, dễ tiếp cận cho mọi
                    người dân Việt Nam. Chúng tôi cam kết cung cấp dịch vụ y tế toàn diện, kết hợp giữa y học hiện đại
                    và phương pháp chăm sóc tận tâm.
                  </p>
                  <div className="mission-values">
                    <div className="mission-value-item">
                      <div className="value-icon">
                        <i className="fas fa-heart"></i>
                      </div>
                      <div className="value-content">
                        <h4>Tận Tâm</h4>
                        <p>Đặt bệnh nhân làm trung tâm trong mọi quyết định</p>
                      </div>
                    </div>
                    <div className="mission-value-item">
                      <div className="value-icon">
                        <i className="fas fa-medal"></i>
                      </div>
                      <div className="value-content">
                        <h4>Chất Lượng</h4>
                        <p>Cam kết cung cấp dịch vụ y tế đạt tiêu chuẩn quốc tế</p>
                      </div>
                    </div>
                    <div className="mission-value-item">
                      <div className="value-icon">
                        <i className="fas fa-handshake"></i>
                      </div>
                      <div className="value-content">
                        <h4>Tin Cậy</h4>
                        <p>Xây dựng mối quan hệ tin cậy với bệnh nhân và đối tác</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="about-section history-section">
          <div className="container">
            <h2 className="section-title text-center">Lịch Sử Phát Triển</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2010</h3>
                  <p>Thành lập VNA Health với phòng khám đầu tiên tại Hà Nội với 5 bác sĩ chuyên khoa</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2015</h3>
                  <p>Mở rộng quy mô với 3 chi nhánh tại các thành phố lớn và đội ngũ 50 bác sĩ</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2018</h3>
                  <p>Triển khai hệ thống đặt lịch khám trực tuyến đầu tiên tại Việt Nam</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2020</h3>
                  <p>Khai trương Trung tâm Y tế Chuyên sâu với trang thiết bị hiện đại nhất</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2023</h3>
                  <p>Phát triển mạng lưới 10 chi nhánh trên toàn quốc với hơn 200 bác sĩ chuyên khoa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section team-section">
          <div className="container">
            <h2 className="section-title text-center">Đội Ngũ Chuyên Gia</h2>
            <p className="section-description text-center">
              Đội ngũ y bác sĩ giàu kinh nghiệm, được đào tạo bài bản trong và ngoài nước
            </p>
            <div className="team-members">
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/about/doctor1.jpg" alt="GS.TS Nguyễn Văn A" />
                </div>
                <div className="member-info">
                  <h3>GS.TS Nguyễn Văn A</h3>
                  <p className="member-position">Giám đốc Y khoa</p>
                  <p className="member-description">
                    Hơn 25 năm kinh nghiệm trong lĩnh vực Tim mạch, tốt nghiệp Đại học Y Harvard
                  </p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/about/doctor2.jpg" alt="PGS.TS Trần Thị B" />
                </div>
                <div className="member-info">
                  <h3>PGS.TS Trần Thị B</h3>
                  <p className="member-position">Trưởng khoa Nội</p>
                  <p className="member-description">
                    Chuyên gia hàng đầu về Nội khoa, với nhiều công trình nghiên cứu được công bố quốc tế
                  </p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/about/doctor3.jpg" alt="TS.BS Lê Văn C" />
                </div>
                <div className="member-info">
                  <h3>TS.BS Lê Văn C</h3>
                  <p className="member-position">Trưởng khoa Ngoại</p>
                  <p className="member-description">Bác sĩ phẫu thuật xuất sắc với hơn 1000 ca phẫu thuật thành công</p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/about/doctor4.jpg" alt="BS.CKI Phạm Thị D" />
                </div>
                <div className="member-info">
                  <h3>BS.CKI Phạm Thị D</h3>
                  <p className="member-position">Trưởng khoa Sản</p>
                  <p className="member-description">Chuyên gia sản khoa với kinh nghiệm đỡ đẻ hơn 2000 ca an toàn</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="about-section facilities-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-content">
                  <h2 className="section-title">Cơ Sở Vật Chất</h2>
                  <p className="section-description">
                    VNA Health tự hào sở hữu hệ thống cơ sở vật chất hiện đại bậc nhất Việt Nam, được trang bị đầy đủ
                    thiết bị y tế tiên tiến nhập khẩu từ các nước phát triển.
                  </p>
                  <ul className="facilities-list">
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Hệ thống phòng mổ vô trùng tiêu chuẩn quốc tế</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Máy chụp cộng hưởng từ (MRI) 3.0 Tesla mới nhất</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Hệ thống chụp CT Scanner 128 lát cắt</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Phòng xét nghiệm đạt tiêu chuẩn ISO 15189</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Phòng khám riêng tư, thoải mái cho bệnh nhân</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="facilities-images">
                  <div className="facility-image">
                    <img src="/images/about/facility1.jpg" alt="Cơ sở vật chất VNA Health" />
                  </div>
                  <div className="facility-image">
                    <img src="/images/about/facility2.jpg" alt="Thiết bị y tế VNA Health" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="about-section testimonials-section">
          <div className="container">
            <h2 className="section-title text-center">Khách Hàng Nói Gì Về Chúng Tôi</h2>
            <div className="testimonials">
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>
                    "Tôi rất hài lòng với dịch vụ tại VNA Health. Bác sĩ tận tình tư vấn, nhân viên chu đáo và quy trình
                    khám bệnh nhanh chóng, không phải chờ đợi lâu."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src="/images/about/patient1.jpg" alt="Nguyễn Thị Hương" />
                  </div>
                  <div className="author-info">
                    <h4>Nguyễn Thị Hương</h4>
                    <p>Khách hàng tại Hà Nội</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>
                    "Đặt lịch khám qua ứng dụng rất tiện lợi, tôi có thể chọn bác sĩ và thời gian phù hợp. Kết quả khám
                    chính xác và được tư vấn chi tiết về phương pháp điều trị."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src="/images/about/patient2.jpg" alt="Trần Văn Minh" />
                  </div>
                  <div className="author-info">
                    <h4>Trần Văn Minh</h4>
                    <p>Khách hàng tại TP.HCM</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>
                    "Tôi đã điều trị dài hạn tại VNA Health và rất tin tưởng vào chuyên môn của các bác sĩ. Cơ sở vật
                    chất hiện đại, sạch sẽ và quy trình theo dõi bệnh rất chuyên nghiệp."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src="/images/about/patient3.jpg" alt="Lê Thị Hoa" />
                  </div>
                  <div className="author-info">
                    <h4>Lê Thị Hoa</h4>
                    <p>Khách hàng tại Đà Nẵng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="about-section partners-section">
          <div className="container">
            <h2 className="section-title text-center">Đối Tác Của Chúng Tôi</h2>
            <div className="partners-logos">
              <div className="partner-logo">
                <img src="/images/about/partner1.jpg" alt="Đối tác 1" />
              </div>
              <div className="partner-logo">
                <img src="/images/about/partner2.jpg" alt="Đối tác 2" />
              </div>
              <div className="partner-logo">
                <img src="/images/about/partner3.jpg" alt="Đối tác 3" />
              </div>
              <div className="partner-logo">
                <img src="/images/about/partner4.jpg" alt="Đối tác 4" />
              </div>
              <div className="partner-logo">
                <img src="/images/about/partner5.jpg" alt="Đối tác 5" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Đặt Lịch Khám Ngay Hôm Nay</h2>
              <p>Chăm sóc sức khỏe chuyên nghiệp, tận tâm dành cho bạn và gia đình</p>
              <button className="cta-button">Đặt Lịch Khám</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <HomeFooter />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(About)

