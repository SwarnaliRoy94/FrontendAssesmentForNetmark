"use client";

import Expandable from "@/components/expandable/expandable";
import styles from "./page.module.css";
import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

export const faqItems = [
  {
    id: 1,
    header: "How do I create an account?",
    content:
      "To create an account, click on the 'Sign Up' button and fill out the required information on the registration form. Once completed, you will receive a verification email to activate your account.",
  },
  {
    id: 2,
    header: "What payment methods do you accept?",
    content:
      "We accept major credit cards such as Visa, Mastercard, and American Express. Additionally, we also support payments through PayPal.",
  },
  {
    id: 3,
    header: "How can I reset my password?",
    content:
      "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions provided to reset your password.",
  },
  {
    id: 4,
    header: "Can I cancel my order?",
    content:
      "Yes, you can cancel your order as long as it has not been shipped. Please contact our customer support team to assist you with the cancellation process.",
  },
  {
    id: 5,
    header: "What is your return policy?",
    content:
      "Our return policy allows you to return products within 30 days of purchase for a full refund, provided the items are unused and in their original packaging. Please refer to our Returns page for more detailed information.",
  },
  {
    id: 6,
    header: "How long does shipping take?",
    content:
      "Shipping times may vary depending on your location and the shipping method chosen. Generally, domestic orders are delivered within 3-5 business days, while international orders may take up to 2 weeks.",
  },
  {
    id: 7,
    header: "Do you offer international shipping?",
    content:
      "Yes, we offer international shipping to most countries. During the checkout process, you can select your country from the list of available shipping destinations.",
  },
  {
    id: 8,
    header: "Can I track my order?",
    content:
      "Yes, you can track your order by logging into your account and navigating to the 'Order History' section. Click on the specific order to view the tracking information.",
  },
  {
    id: 9,
    header: "What if I receive a damaged item?",
    content:
      "If you receive a damaged item, please contact our customer support team immediately. We will guide you through the process of returning the item and arranging for a replacement.",
  },
  {
    id: 10,
    header: "How can I contact customer support?",
    content:
      "You can contact our customer support team by sending an email to support@example.com or by calling our toll-free number at 1-800-123-4567. Our support representatives are available 24/7 to assist you.",
  },
];

export default function Home() {
  const [isOpenItemId, setIsOpenItemId] = useState<number>(-1);

  const updateOpenedItemId = (id: number) => {
    // when an opened item is clicked it will set -1 to close the item.
    setIsOpenItemId((prev) => (id === prev ? -1 : id));
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.heading}> Frequently Asked Questions </div>
        {faqItems.map((item) => (
          <div key={item.id} className={styles.expandable}>
            <Expandable
              isOpen={isOpenItemId === item.id}
              updateItemId={() => updateOpenedItemId(item.id)}
            >
              <Expandable.Header>{item.header}</Expandable.Header>
              <Expandable.Icon
                openIcon={<FaChevronCircleDown color="grey" />}
                closeIcon={<FaChevronCircleUp color="grey" />}
              />
              <Expandable.Body>{item.content}</Expandable.Body>
            </Expandable>
          </div>
        ))}
      </div>
    </main>
  );
}
