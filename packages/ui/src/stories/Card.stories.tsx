import type { Meta, StoryObj } from "@storybook/react";
import { SystemButton } from "../components/SystemButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/cards/Card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Account Summary</CardTitle>
        <CardDescription>
          View your account overview and details
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Balance</p>
            <p className="text-2xl font-bold">$2,500.00</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Income
              </p>
              <p className="text-lg font-medium text-green-500">+$1,800.00</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Expenses
              </p>
              <p className="text-lg font-medium text-red-500">-$950.00</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <SystemButton variant="outline" size="sm">
          View Transactions
        </SystemButton>
        <SystemButton size="sm">Add Funds</SystemButton>
      </CardFooter>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card className="w-[300px] overflow-hidden">
      <div className="h-[200px] bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Product Image</span>
      </div>
      <CardContent className="pt-6">
        <CardTitle className="text-xl mb-2">Premium Headphones</CardTitle>
        <CardDescription className="mb-4">
          High-quality wireless headphones with noise cancellation.
        </CardDescription>
        <p className="text-2xl font-bold mb-4">$299.99</p>
        <div className="flex items-center text-sm text-yellow-500 mb-4">
          ★★★★☆ <span className="text-gray-500 ml-1">(4.2)</span>
        </div>
      </CardContent>
      <CardFooter>
        <SystemButton className="w-full">Add to Cart</SystemButton>
      </CardFooter>
    </Card>
  ),
};
