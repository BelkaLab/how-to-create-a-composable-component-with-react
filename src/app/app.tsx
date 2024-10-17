import { Button } from '@/components/button';
import Card from '@/components/card';
import { Input } from '@/components/input';
import { Label } from '@radix-ui/react-label';

function App() {
  return (
    <div className="flex flex-col items-start justify-start gap-4 p-4">
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
    </div>
  );
}

export { App };
