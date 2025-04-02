"use client";
import { Modal } from "./modal";
import { CloseButton } from "../buttons";

export const TermsModal = ({
  open,
  closeAction: close,
}: {
  open: boolean;
  closeAction: () => void;
}) => {
  return (
    <Modal open={open} closeAction={close}>
      {/* Modal Content */}
      <div className="bg-card prose prose-sm md:prose-base lg:prose-lg prose-invert mx-2 max-h-[70vh] overflow-scroll rounded-xl border px-4">
        {/* Modal Header */}
        <div className="flex flex-row items-center justify-between">
          <h2>ZORT — Terms and Conditions</h2>
          <CloseButton onClick={close} />
        </div>
        {/* Modal Body */}
        <div>
          <h3 className="text-primary">Last Updated: 07 January 2025</h3>
          <p>
            {` Welcome to ZORT, an AI-powered bet-tracking application operated by
          GIS Analytics Limited ("we," "us," or "our"). By downloading,
          accessing, or otherwise using ZORT (the "App"), you agree to be bound
          by the following Terms and Conditions (the "Terms"). Please read them
          carefully.`}
          </p>

          <h4>1. Overview and Acceptance</h4>
          <h5>1.1 Purpose</h5>
          <p>
            ZORT is designed to assist users in logging, analyzing, and
            optimizing their sports betting activities. By accessing or using
            any part of ZORT, you acknowledge that you have read, understood,
            and agree to be bound by these Terms.
          </p>

          <h5>1.2 Modifications</h5>
          <p>
            We may modify or update these Terms at any time to reflect changes
            in our practices or applicable law. If any material changes are
            made, we will provide a clear notice within the App or via email.
            Your continued use of ZORT constitutes acceptance of any updated
            Terms.
          </p>

          <h4>2. Eligibility and User Accounts</h4>
          <p>
            You must be at least eighteen (18) years of age to use this
            application. By using ZORT, you represent and warrant that you
            satisfy this requirement.
          </p>

          <h4>3. Data Collection and Privacy</h4>
          <p>
            We collect only the personal information necessary to operate and
            improve the App. We do not sell or lease your personal data to third
            parties.
          </p>

          <h4>4. Contact Information</h4>
          <p>
            For questions regarding these Terms, the App, or to submit a
            complaint, please contact us at:
          </p>
          <p>
            GIS Analytics Limited
            <br />
            info@gisanalytics.uk
          </p>
        </div>
      </div>
    </Modal>
  );
};
