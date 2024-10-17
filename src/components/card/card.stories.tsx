import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button';
import { Label } from '@/components/label';
import { Input } from '@/components/input';
import Card from '@/components/card';

const meta: Meta = {
  title: 'Components/Card',
};

export default meta;

type Story = StoryObj;

export const DefaultCard: Story = {
  render: () => (
    <Card.Root className="max-w-sm">
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>
          Short description about the card content.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <p>
          This is the content of the card. You can place any text or other
          elements here.
        </p>
      </Card.Content>
      <Card.Footer>
        <Button variant="outline">Action</Button>
      </Card.Footer>
    </Card.Root>
  ),
};

export const CardWithForm: Story = {
  render: () => (
    <Card.Root className="w-[350px]">
      <Card.Header>
        <Card.Title>Create project</Card.Title>
        <Card.Description>
          Deploy your new project in one-click.
        </Card.Description>
      </Card.Header>
      <form>
        <Card.Content>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          </div>
        </Card.Content>
        <Card.Footer className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </Card.Footer>
      </form>
    </Card.Root>
  ),
};

export const CardWithLongContent: Story = {
  render: () => (
    <Card.Root className="max-w-sm">
      <Card.Header>
        <Card.Title>Extended Card Title</Card.Title>
        <Card.Description>
          This is a longer description for the card, providing more details
          about the content.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <p>
          Here's a detailed section of the card content. You can elaborate on
          the topic in this area, adding more text, components, or any relevant
          information that fits within the card structure.
        </p>
      </Card.Content>
      <Card.Footer>
        <Button>Confirm</Button>
      </Card.Footer>
    </Card.Root>
  ),
};

export const CardWithImage: Story = {
  render: () => (
    <Card.Root className="max-w-sm">
      <Card.Header>
        <Card.Title>Card with Image</Card.Title>
        <Card.Description>
          This card contains an image in its content.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <img
          src="./src/assets/background.png"
          alt="Sample Image"
          className="rounded-lg"
        />
        <p className="mt-4">
          This is a card with an image. Images can enhance the visual appeal of
          cards.
        </p>
      </Card.Content>
      <Card.Footer>
        <Button variant="outline">More Info</Button>
      </Card.Footer>
    </Card.Root>
  ),
};

export const CardWithActionButtons: Story = {
  render: () => (
    <Card.Root className="max-w-md">
      <Card.Header>
        <Card.Title>Card with Multiple Actions</Card.Title>
        <Card.Description>
          This card has two action buttons in the footer for user interaction.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <p>
          Place any content here that requires user action, like a form or
          interactive elements.
        </p>
      </Card.Content>
      <Card.Footer className="space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </Card.Footer>
    </Card.Root>
  ),
};

export const CardWithCustomStyling: Story = {
  render: () => (
    <Card.Root className="max-w-sm border-blue-200 bg-blue-100 text-blue-800">
      <Card.Header>
        <Card.Title>Styled Card</Card.Title>
        <Card.Description>
          This card has custom background and text colors.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <p>
          Apply custom styles to cards to match your application's design and
          branding.
        </p>
      </Card.Content>
      <Card.Footer>
        <Button>Learn More</Button>
      </Card.Footer>
    </Card.Root>
  ),
};
