import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class OutStandingDoctor extends Component {

    render() {

        return (
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                        <button className="btn-section">xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến sĩ Võ Ngọc Anh</div>
                                        <div>Cơ Xương Khớp 1</div>
                                    </div>
                            </div>
                            <div className="section-customize">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến sĩ Võ Ngọc Anh</div>
                                        <div>Cơ Xương Khớp 2</div>
                                    </div>
                            </div>
                            <div className="section-customize">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến sĩ Võ Ngọc Anh</div>
                                        <div>Cơ Xương Khớp 3</div>
                                    </div>
                            </div>
                            <div className="section-customize">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến sĩ Võ Ngọc Anh</div>
                                        <div>Cơ Xương Khớp 4</div>
                                    </div>
                            </div>
                            <div className="section-customize">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến sĩ Võ Ngọc Anh</div>
                                        <div>Cơ Xương Khớp 5</div>
                                    </div>
                            </div>
                            <div className="section-customize">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến sĩ Võ Ngọc Anh</div>
                                        <div>Cơ Xương Khớp6</div>
                                    </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);