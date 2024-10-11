import React from "react";
import styles from "../trems-conditions/trems-conditions.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const PrivacyPolicyScreen = () => {
  return (
    <div className={styles.TermScreen}>
      <CustomContainer>
        <div className={styles.wrap}>
          <h1>Privacy Policy</h1>
          <br />
          <br />

          <div className={styles.cont}>
            <div class="entry-content single-content">
              <ol class="wp-block-list">
                <li>
                  <strong>Edens Bounty Foods</strong>&nbsp;is committed to
                  protecting any personal information that you may provide to
                  us.
                </li>

                <li>
                  In particular, we believe it is important for you to know how
                  we treat information about you that we may receive from this
                  website “
                  <a href="https://www.edensbountyfoods.com/">
                    www.edensbountyfoods.com/
                  </a>
                  ” (“Site”).The information collected from you may include your
                  name, address, telephone, fax number or e-mail address etc.2.
                </li>

                <li>
                  This Privacy Policy is applicable to any personal information,
                  which is given by you to us (“User Information”) via this site
                  and is devised to help you feel more confident about the
                  privacy and security of your personal details.
                </li>

                <li>
                  “We” / “Us” means&nbsp;
                  <strong>Edens Bounty Foods</strong>&nbsp;and “Our” interpreted
                  accordingly. “Users” means the users of the site collectively
                  and/or individually as the context allows.
                </li>

                <li>
                  When using the site you may be asked to enter User
                  Information. Such User Information will only be used for the
                  purposes for which it was collected, for any other purposes
                  specified at the collection point and in accordance with this
                  Privacy Policy.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default PrivacyPolicyScreen;
