<?php
namespace App\Command;

use App\Services\DefaultUser;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class CreateUserCommand extends Command
{
    protected static $defaultName = "app:create-user-default";

    /** @var DefaultUser $service */
    private $service;

    public function __construct(string $name = null, DefaultUser $service)
    {
        $this->service = $service;
        parent::__construct($name);
    }

    protected function configure()
    {
        $this
            ->setDescription("Create a new user")
            ->setHelp("This command allows you to create a user");
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln("Create default user");
        $this->service->createDefaultUser();
        $output->writeln("User created");
        return 0;
    }
}